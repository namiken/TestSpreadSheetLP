import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './APP.css'
import { MainContents } from './mainContents.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MainContents />
    </QueryClientProvider>
  </StrictMode>,
)
