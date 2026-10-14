export interface ApiSuccessResponse<T = unknown> {
  success: true;
  message: string;
  data: T;
  timestamp: string;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  error?: string;
  stack?: string;
  timestamp: string;
}

export interface HealthStatus {
  status: 'ok' | 'degraded' | 'error';
  service: string;
  version: string;
  environment: string;
  uptime: number;
  timestamp: string;
  database: {
    status: 'connected' | 'disconnected' | 'connecting' | 'disabled';
    message?: string;
  };
}
