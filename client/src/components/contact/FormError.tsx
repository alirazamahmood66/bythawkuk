import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface FormErrorProps {
  message?: string;
  onRetry: () => void;
}

export const FormError: React.FC<FormErrorProps> = ({
  message = 'Something went wrong while dispatching your project enquiry.',
  onRetry,
}) => {
  return (
    <div
      role="alert"
      className="p-6 rounded-2xl bg-red-950/30 border border-red-500/40 space-y-4 text-center max-w-md mx-auto"
    >
      <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mx-auto">
        <AlertCircle className="w-6 h-6" />
      </div>

      <div className="space-y-1">
        <h3 className="text-lg font-bold text-white tracking-tight">
          We Couldn't Send That
        </h3>
        <p className="text-xs sm:text-sm text-space-muted leading-relaxed font-normal">
          {message} Please verify your connection and attempt submission again.
        </p>
      </div>

      <div>
        <Button
          variant="secondary"
          size="sm"
          onClick={onRetry}
          className="inline-flex items-center"
        >
          <RefreshCw className="w-3.5 h-3.5 mr-2" />
          <span>Try Again</span>
        </Button>
      </div>
    </div>
  );
};
