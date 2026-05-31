import logger from '../utils/logger.js';

export const errorMiddleware = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  const statusCode = error.statusCode || error.status || 500;
  const message = statusCode === 500
    ? 'Internal server error'
    : error.message;

  logger.error(error);

  return res.status(statusCode).json({
    error: message,
  });
};
