export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  timestamp: string;
  error?: string;
}

export interface HealthCheckData {
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
