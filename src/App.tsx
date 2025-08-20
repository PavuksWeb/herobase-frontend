import { Route, Routes } from 'react-router';
// import Header from './components/Header';
import HeroesList from './components/HeroesList';
// import HeroSection from './components/HeroSection';
import Layout from './components/Layout';
import HeroPage from './components/HeroPage';
import { BrowserRouter } from 'react-router';
import { PaginationProvider } from './context/PaginationProvider';

export default function App() {
  return (
    <BrowserRouter>
      <PaginationProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HeroesList />} />
            <Route path="heroes/:id" element={<HeroPage />} />
          </Route>
        </Routes>
      </PaginationProvider>
    </BrowserRouter>
  );
}
