import { Route, Routes } from 'react-router';
// import Header from './components/Header';
import HeroesList from './components/HeroesList';
// import HeroSection from './components/HeroSection';
import Layout from './components/Layout';
import HeroPage from './components/HeroPage';
import { BrowserRouter } from 'react-router';

export default function App() {
  return (
    // <>
    //   <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    //   <div className="relative bg-cover bg-center bg-[url(/heroes.webp)]">
    //     <HeroSection>
    //       <Header />
    //       <HeroesList />
    //     </HeroSection>
    //   </div>
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HeroesList />} />
          <Route path="heroes/:id" element={<HeroPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
