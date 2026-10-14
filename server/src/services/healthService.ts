import { env } from '../config/env.js';
import { getDatabaseStatus } from '../config/database.js';
import type { HealthStatus } from '../types/index.js';

export class HealthService {
  public static getHealth(): HealthStatus {
    const dbStatus = getDatabaseStatus();

    return {
      status: 'ok',
      service: 'BYTHAWK Digital Agency API',
      version: env.APP_VERSION,
      environment: env.NODE_ENV,
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      database: dbStatus,
    };
  }
}
