import type { UpdateHero } from '../types/hero.t';

export default async function updateHeroInfo(hero: UpdateHero) {
  const res = await fetch(`http://localhost:4000/heroes/${hero.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(hero),
  });

  if (!res.ok) {
    throw new Error('Failed to update hero');
  }

  return res.json();
}
