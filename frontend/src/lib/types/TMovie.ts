export type TMovieStatus = "in pick" | "to watch" | "in watching" | "in done";


export interface TMovie {
  name: string,
  description: string,
  rating: number,
  status: TMovieStatus
}