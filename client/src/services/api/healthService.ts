import { apiRequest } from './apiClient';
import type { ApiResponse, HealthCheckData } from '@/types/api';

export const healthService = {
  async checkHealth(): Promise<ApiResponse<HealthCheckData>> {
    return apiRequest<ApiResponse<HealthCheckData>>('/health');
  },
};
