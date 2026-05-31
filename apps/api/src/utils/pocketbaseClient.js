import logger from './logger.js';

const pocketbaseClient = {
  async send() {
    logger.warn('PocketBase email is not configured.');

    const error = new Error(
      'Email service is not configured. Add PocketBase settings before using the contact form.'
    );
    error.statusCode = 503;
    throw error;
  },
};

export default pocketbaseClient;
