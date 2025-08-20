import type { Hero } from '../types/hero';

export default async function fetchHero(id: string): Promise<Hero> {
  const res = await fetch(`http://localhost:4000/heroes/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fatch hero');
  }
  return res.json();
}
