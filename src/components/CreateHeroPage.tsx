import { useNavigate } from 'react-router';
import HeroForm from './HeroForm';

export default function CreateHeroPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col mx-26 mt-6 gap-6">
      <button
        className="bg-neutral-800 text-2xl px-4 py-1 rounded-2xl hover:bg-neutral-700 cursor-pointer transition-colors delay-50 w-fit"
        onClick={() => navigate(-1)}
      >
        ←
      </button>
      <HeroForm />
    </div>
  );
}
