import { Outlet } from 'react-router';
import Header from './Header';

export default function Layout() {
  return (
    <div className="min-h-screen relative">
      {/* Фон */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{ backgroundImage: "url('/heroes.webp')" }}
      />

      {/* Контент поверх */}
      <div className="relative z-10">
        <Header />
        <main className="p-6">
          <Outlet /> {/* сюда будут подставляться страницы */}
        </main>
      </div>
    </div>
  );
}
