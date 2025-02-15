import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DynamicContents } from './DynamicContents.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import './css/styles.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <DynamicContents />
    </QueryClientProvider>
  </StrictMode>
);
