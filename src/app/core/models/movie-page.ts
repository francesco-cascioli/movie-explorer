import { Movie } from "./tmdb";

export interface MoviePage {
  results: Movie[];
  page: number;
  total_pages: number;
}
