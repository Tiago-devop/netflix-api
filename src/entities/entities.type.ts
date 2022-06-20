import Show from "./show.entity";
import ShowCategory from './../enums/show-category.enum';
import Episode from "./episode.entity";

export interface IUser {
  id: number,
  email: string,
  password: string,
  list: Show[]
}

export interface IShow {
  id: number,
  title: string,
  director: string,
  actors: string,
  description: string,
  cover: string,
  category: ShowCategory,
  episodes: Episode[],
}

export interface IEpisode {
  id: number,
  title: string,
  description: string,
  cover: string,
  duration: number,
  show: Show
}
