import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router';
import { PaginationProvider } from './contexts/providers/PaginationProvider';
import HeroesList from './components/HeroesList';
import Layout from './components/Layout';
import HeroPage from './components/HeroPage';
import CreateHeroPage from './components/CreateHeroPage';

export default function App() {
  return (
    <BrowserRouter>
      <PaginationProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HeroesList />} />
            <Route path="heroes/:id" element={<HeroPage />} />
            <Route path="/create" element={<CreateHeroPage />} />
          </Route>
        </Routes>
      </PaginationProvider>
    </BrowserRouter>
  );
}
