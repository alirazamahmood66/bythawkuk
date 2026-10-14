import { useState, useEffect, useCallback } from 'react';
import { healthService } from '@/services/api/healthService';
import type { HealthCheckData } from '@/types/api';

export function useApiHealth() {
  const [data, setData] = useState<HealthCheckData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHealth = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await healthService.checkHealth();
      if (response.success && response.data) {
        setData(response.data);
      } else {
        setError(response.message || 'Health check returned an invalid payload');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to reach API server';
      setError(msg);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHealth();
  }, [fetchHealth]);

  return { data, isLoading, error, refetch: fetchHealth };
}
