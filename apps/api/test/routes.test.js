import assert from 'node:assert/strict';
import { after, before, describe, test } from 'node:test';

process.env.CORS_ORIGIN = 'http://localhost:3000';

const { default: app } = await import('../src/app.js');

let server;
let baseUrl;

const postJson = (path, body) => {
  return fetch(`${baseUrl}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};

before(async () => {
  server = app.listen(0);
  await new Promise((resolve) => {
    server.once('listening', resolve);
  });

  const { port } = server.address();
  baseUrl = `http://127.0.0.1:${port}`;
});

after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
});

describe('API routes', () => {
  test('GET /health returns ok', async () => {
    const response = await fetch(`${baseUrl}/health`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.deepEqual(body, { status: 'ok' });
  });

  test('GET /missing returns 404', async () => {
    const response = await fetch(`${baseUrl}/missing`);
    const body = await response.json();

    assert.equal(response.status, 404);
    assert.deepEqual(body, { error: 'Route not found' });
  });

  test('POST /contact validates required fields', async () => {
    const response = await postJson('/contact', {
      name: '',
      email: 'not-an-email',
      subject: 'Other',
      message: 'short',
    });
    const body = await response.json();

    assert.equal(response.status, 400);
    assert.equal(body.error, 'Name is required and must be at least 2 characters long');
  });

  test('POST /contact returns 503 when email is not configured', async () => {
    const response = await postJson('/contact', {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Other',
      message: 'This is a valid test message.',
    });
    const body = await response.json();

    assert.equal(response.status, 503);
    assert.equal(body.error, 'Failed to send email. Please try again later.');
  });
});
