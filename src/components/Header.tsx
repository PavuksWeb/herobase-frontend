import { Link } from 'react-router';
import Logo from './Logo';

export default function Header() {
  return (
    // <header className="relative w-full h-24 z-30 flex justify-center items-center p-4 bg-neutral-800/90">
    <header className="bg-neutral-800/90 p-4 flex items-center justify-center w-full h-24">
      <Link to="/">
        <Logo />
      </Link>
    </header>
  );
}
