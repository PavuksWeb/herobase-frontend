// import { useState } from 'react';
import { useHeroes } from '../hooks/useHeroes';
import usePagination from '../hooks/usePagination';
import HeroCard from './HeroCard';
import { Pagination } from '@mui/material';

export default function HeroesList() {
  const { data: heroes, isLoading, isError, error } = useHeroes();
  const { curPage, setCurPage } = usePagination();
  const itemsPerPage = 5;

  if (isLoading)
    return (
      <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
    );
  if (isError) return <p>{error.message}</p>;
  if (!heroes || heroes.length === 0)
    return <p className="text-white p-4">There no heroes</p>;

  const pageCount = Math.ceil(heroes.length / itemsPerPage);
  const displayedHeroes = heroes.slice(
    (curPage - 1) * itemsPerPage,
    curPage * itemsPerPage
  );

  return (
    <div className="flex flex-col items-center p-10 gap-6 mt-16">
      <div className="flex gap-10">
        {displayedHeroes.map((hero) => (
          <div key={hero.id}>
            <HeroCard {...hero} />
          </div>
        ))}
      </div>

      <Pagination
        count={pageCount}
        page={curPage}
        onChange={(_, value) => setCurPage(value)}
        className="mt-6"
        size="large"
        sx={{
          '& .MuiPaginationItem-root': {
            backgroundColor: '#262626',
            color: 'white',
          },
          '& .Mui-selected': {
            backgroundColor: '#6d6d6d',
            color: 'white',
          },
          '& .MuiPaginationItem-root:hover': {
            backgroundColor: '#374151',
          },
        }}
      />
    </div>
  );
}
