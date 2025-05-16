import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch('http://localhost:3000/movies');
  const movies = await response.json();

  return { movies };
}