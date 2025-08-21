import { useMutation, useQueryClient } from '@tanstack/react-query';
import updateHeroInfo from '../services/updateHeroInfo';
import deleteHeroInfo from '../services/deleteHeroInfo';
import createHeroInfo from '../services/createHeroInfo';

export default function useHeroMutations() {
  const queryClient = useQueryClient();

  const createHero = useMutation({
    mutationFn: createHeroInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['heroes'] });
    },
  });

  const updateHero = useMutation({
    mutationFn: updateHeroInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['heroes'] });
    },
  });

  const deleteHero = useMutation({
    mutationFn: deleteHeroInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['heroes'] });
    },
  });

  return { createHero, updateHero, deleteHero };
}
