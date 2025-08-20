import type { Hero } from '../types/hero.t';

export default async function fetchHeroes(): Promise<Hero[]> {
  const res = await fetch('http://localhost:4000/heroes');
  if (!res.ok) {
    throw new Error("Can't get a heroes! :(");
  }
  return res.json();
}
