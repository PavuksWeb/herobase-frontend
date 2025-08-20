import { useQuery } from '@tanstack/react-query';
import fetchHero from '../services/fetchHeroById';
import type { Hero } from '../types/hero';

export function useHero(id: string | undefined) {
  return useQuery<Hero, Error>({
    queryKey: ['hero', id],
    queryFn: () => fetchHero(id!),
    enabled: !!id,
  });
}
