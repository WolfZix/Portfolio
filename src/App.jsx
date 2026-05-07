import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider } from '@/lib/AuthContext';
import Home from './pages/Home';
import ScrollToTopButton from "./components/wolfix/ScrollToTopButton";

function App() {
  const rawBasename = import.meta.env.VITE_ROUTER_BASENAME ?? import.meta.env.BASE_URL;
  const basename = rawBasename && rawBasename !== './' ? rawBasename : '/';

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router basename={basename}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <ScrollToTopButton />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;