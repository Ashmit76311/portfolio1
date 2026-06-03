import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, '../.env');

dotenv.config({ path: envPath });

(async () => {
  // Import app after dotenv is configured
  const { default: app } = await import('./app.js');
  const { default: logger } = await import('./utils/logger.js');

  process.on('uncaughtException', (error) => {
    logger.error('Uncaught exception:', error);
  });

  process.on('unhandledRejection', (reason, promise) => {
    logger.error('Unhandled rejection at:', promise, 'reason:', reason);
  });

  process.on('SIGINT', async () => {
    logger.info('Interrupted');
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    logger.info('SIGTERM signal received');

    await new Promise((resolve) => setTimeout(resolve, 3000));

    logger.info('Exiting');
    process.exit();
  });

  const port = process.env.PORT || 3001;

  app.listen(port, () => {
    logger.info(`API Server running on http://localhost:${port}`);
  });
})();

