import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import HeroPage from './components/HeroPage.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <BrowserRouter> */}
      {/* <Routes>
          <Route path="/" element={<App />} />
          <Route path="/heroes/:id" element={<HeroPage />} />
        </Routes> */}
      <App />
      {/* </BrowserRouter> */}
    </QueryClientProvider>
  </StrictMode>
);
