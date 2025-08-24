import { Outlet } from 'react-router';
import Header from './Header';

export default function Layout() {
  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 bg-cover bg-fixed bg-center brightness-75"
        style={{ backgroundImage: "url('/heroes.webp')" }}
      />

      <div className="relative z-10">
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
