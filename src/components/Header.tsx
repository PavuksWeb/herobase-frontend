import { Link } from 'react-router';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-neutral-800/90 p-4 flex items-center justify-center w-full h-24">
      <Link to="/">
        <Logo />
      </Link>
    </header>
  );
}
