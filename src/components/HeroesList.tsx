import { useHeroes } from '../hooks/useHeroes';
import usePagination from '../hooks/usePagination';
import HeroCard from './HeroCard';
import { Pagination } from '@mui/material';
import Spinner from './Spinner';
import { Link } from 'react-router';

export default function HeroesList() {
  const { data: heroes, isLoading, isError, error } = useHeroes();
  const { curPage, setCurPage } = usePagination();
  const itemsPerPage = 5;

  if (isLoading) return <Spinner />;
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
        {displayedHeroes.map((hero, index) => (
          <div key={hero.id ?? index}>
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

      <Link
        to={'/create'}
        className="bg-neutral-800/90 text-2xl p-4 rounded-2xl cursor-pointer hover:bg-neutral-700 transition-colors duration-200"
      >
        Create new hero
      </Link>
    </div>
  );
}
