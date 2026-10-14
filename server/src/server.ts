import { createApp } from './app.js';
import { env } from './config/env.js';
import { connectDatabase } from './config/database.js';
import { logger } from './utils/logger.js';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = createApp();

  const server = app.listen(env.PORT, () => {
    logger.info(`=========================================`);
    logger.info(`BYTHAWK API Server online`);
    logger.info(`Domain: bythawk.uk`);
    logger.info(`Environment: ${env.NODE_ENV}`);
    logger.info(`Port: ${env.PORT}`);
    logger.info(`Health check: http://localhost:${env.PORT}${env.API_PREFIX}/health`);
    logger.info(`=========================================`);
  });

  // Attempt database connection in background without blocking server startup
  connectDatabase().catch((err: unknown) => {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    logger.warn(`Background database connection notice: ${msg}`);
  });

  const shutdown = async (signal: string) => {
    logger.info(`Received ${signal}. Gracefully terminating BYTHAWK server...`);
    server.close(async () => {
      logger.info('HTTP server closed.');
      try {
        await mongoose.connection.close();
        logger.info('Database connection closed.');
      } catch {
        // ignore
      }
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
}

bootstrap().catch((err) => {
  logger.error('Fatal bootstrap failure:', err);
  process.exit(1);
});
