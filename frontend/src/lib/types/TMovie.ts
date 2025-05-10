enum EMovieStatus {
  inPick = "in pick",
  toWatch = "to watch",
  inWatching = "in watching",
  inDone = "in done"
}

export interface TMovie {
  name: string,
  description: string,
  rating: number,
  status: EMovieStatus.inPick,
}