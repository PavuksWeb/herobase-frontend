import type { CreateHero } from '../types/hero.t';

export default async function createHeroInfo(hero: CreateHero) {
  console.log(hero);
  const res = await fetch(`http://localhost:4000/heroes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(hero),
  });

  if (!res.ok) {
    throw new Error('Failed to create hero');
  }

  return res.json();
}
