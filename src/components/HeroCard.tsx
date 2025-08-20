import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import type { Hero } from '../types/hero.t';
import { Link } from 'react-router';

export default function HeroCard(hero: Hero) {
  return (
    <Link to={`/heroes/${hero.id}`}>
      <div className="cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <Card sx={{ width: 250 }}>
          <CardMedia
            sx={{ height: 400 }}
            title={hero.nickname}
            image={hero.images[0]}
          />
          <CardContent className="bg-neutral-800 text-white text-center">
            <Typography sx={{ fontSize: '1.5rem' }}>{hero.nickname}</Typography>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
}
