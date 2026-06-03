import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import routes from './routes/index.js';
import { errorMiddleware } from './middleware/error.js';
import { globalRateLimit } from './middleware/global-rate-limit.js';
import { BodyLimit } from './constants/common.js';

const app = express();

app.set('trust proxy', true);

app.use(helmet());
const rawCorsOrigin = process.env.CORS_ORIGIN || '';
const isProd = process.env.NODE_ENV === 'production';

// When CORS_ORIGIN is "*" and credentials: true, browsers will reflect
// the request origin which effectively allows credentialed requests from
// any domain. Disallow wildcard in production by default to avoid that
// insecure configuration. In non-production (development) the wildcard
// remains permitted for convenience.
let corsOrigin;
if (rawCorsOrigin === '*') {
  if (!isProd) {
    corsOrigin = true;
  } else {
    // Restrict wildcard in production. Require explicit allowlist instead.
    corsOrigin = false;
    // Log a short warning so deployers can see why wildcard was ignored.
    // This is intentional: using '*' with credentials enabled is unsafe.
    // If you intentionally want to allow all origins in production, set
    // `CORS_ORIGIN` to an explicit comma-separated allowlist or remove
    // `credentials: true`.
    // eslint-disable-next-line no-console
    console.warn('CORS_ORIGIN="*" is ignored in production. Use an explicit allowlist.');
  }
} else if (rawCorsOrigin.includes(',')) {
  corsOrigin = rawCorsOrigin.split(',').map((origin) => origin.trim()).filter(Boolean);
} else {
  corsOrigin = rawCorsOrigin || false;
}

app.use(cors({
  origin: corsOrigin,
  credentials: true,
}));
app.use(morgan('combined'));
app.use(globalRateLimit);
app.use(express.json({
  limit: BodyLimit,
}));
app.use(express.urlencoded({
  extended: true,
  limit: BodyLimit,
}));

app.use('/', routes());

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use(errorMiddleware);

export default app;
