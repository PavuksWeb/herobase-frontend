export type Hero = {
  id: number;
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string[];
  catch_phrase: string;
  images: string[];
};

export type CreateHero = Omit<Hero, 'id'>;
export type UpdateHero = Hero;
