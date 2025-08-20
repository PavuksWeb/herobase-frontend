import { useNavigate, useParams } from 'react-router';
import { useHero } from '../hooks/useHero';
import { CircularProgress } from '@mui/material';

export default function HeroPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: hero, isLoading, error } = useHero(id);

  if (isLoading)
    return (
      <div className="flex justify-center mt-10">
        <CircularProgress />
      </div>
    );
  if (error)
    return <p className="text-red-500 text-center mt-10">Loading is failed</p>;
  if (!hero) return <p className="text-center mt-10">Hero is not found</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <button
        className="bg-neutral-800 text-2xl px-4 py-1 rounded-2xl hover:bg-neutral-700 cursor-pointer transition-colors delay-50"
        onClick={() => navigate(-1)}
      >
        ←
      </button>

      <div className="flex gap-10 mt-6">
        <img
          src={hero.images?.[0]}
          alt={hero.nickname}
          className="w-[346px] h-[480] rounded-lg shadow-lg mb-6"
        />
        <div className="flex flex-col bg-neutral-800/90 p-6 text-white gap-3">
          <h1 className="text-3xl font-bold text-center mb-2">
            {hero.nickname}
          </h1>
          <p className="text-center font-bold mb-2">" {hero.catch_phrase} "</p>
          <p className="text-lg leading-relaxed">Real name: {hero.real_name}</p>
          <p className="mt-2">{hero.origin_description}</p>
          <p className="text-2xl mt-1">Superpowers</p>
          <ul className="grid grid-cols-2 gap-4 w-full">
            {hero.superpowers.map((p) => (
              <li>{`-- ${p}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
