import { useQuery } from '@tanstack/react-query';
import fetchHeroes from '../services/fetchHeroes';
import type { Hero } from '../types/hero';

export function useHeroes() {
  return useQuery<Hero[], Error>({
    queryKey: ['heroes'],
    queryFn: fetchHeroes,
    staleTime: 1000 * 6 * 5,
  });
}
