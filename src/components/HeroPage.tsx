import { useNavigate, useParams } from 'react-router';
import { useHero } from '../hooks/useHero';
import { useState } from 'react';
import Spinner from './Spinner';

export default function HeroPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: hero, isLoading, error } = useHero(id);

  const [curImageIndex, setCurImageIndex] = useState(0);

  if (isLoading) return <Spinner />;
  if (error)
    return <p className="text-red-500 text-center mt-10">Loading is failed</p>;
  if (!hero) return <p className="text-center mt-10">Hero is not found</p>;

  const images = hero.images || [];
  const totalImages = images.length;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <button
        className="bg-neutral-800 text-2xl px-4 py-1 rounded-2xl hover:bg-neutral-700 cursor-pointer transition-colors delay-50"
        onClick={() => navigate(-1)}
      >
        ←
      </button>

      <div className="flex gap-10 mt-6">
        <div>
          <img
            src={images[curImageIndex]}
            alt={hero.nickname}
            className="w-[346px] h-[480px] rounded-lg shadow-lg mb-6"
          />

          {totalImages > 1 && (
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-2 mt-2">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    onClick={() => setCurImageIndex(idx)}
                    className={`w-16 h-20 rounded cursor-pointer border-2 transition-transform ${
                      idx === curImageIndex
                        ? 'border-yellow-400 scale-105'
                        : 'border-transparent hover:scale-105'
                    } object-cover`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col w-2xl bg-neutral-800/90 p-6 text-white gap-3">
          <h1 className="text-3xl font-bold text-center mb-2">
            {hero.nickname}
          </h1>
          <p className="text-center font-bold mb-2">" {hero.catch_phrase} "</p>
          <p className="text-lg leading-relaxed">Real name: {hero.real_name}</p>
          <p className="mt-2">{hero.origin_description}</p>
          <p className="text-2xl mt-1">Superpowers</p>
          <ul className="grid grid-cols-2 gap-4 w-full">
            {hero.superpowers.map((p) => (
              <li key={hero.id}>{`-- ${p}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
