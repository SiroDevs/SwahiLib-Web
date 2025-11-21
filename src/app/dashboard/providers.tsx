'use client';

import { useAuthStore } from '@/infrastucture/state/auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const [queryClient] = useState(() => new QueryClient());

  if (!isAuthenticated) {
    router.push("/login");
  }

  if (!isAuthenticated) {
    return <div></div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}