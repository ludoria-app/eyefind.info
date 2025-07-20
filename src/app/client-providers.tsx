'use client';

// Libs
import { QueryClientProvider } from '@tanstack/react-query';

// Local Libs
import { queryClient } from '@app/libs/react-query';

export function ClientProviders({ children }: Children) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
