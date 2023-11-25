import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/navbar.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // suspense: true,
      // -- react-query default config --
      retry: 1,
      // refetchOnMount: false,
      // refetchOnReconnect: false,
      // refetchOnWindowFocus: false,
      // refetchInterval: false,
      // staleTime: 1000 * 60 * 3, // 3m
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
