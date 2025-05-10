<script lang="ts">

import type { TMovie } from "$lib/types/TMovie";

interface Props {
  movie: TMovie;
}

let { movie }: Props = $props();

</script>

<div class="movie-card w-2xs min-h-32 border border-gray-200 rounded shadow-sm p-3 not-[last-child]:mb-2">
  <h3 class="text-lg font-bold">{movie.name}</h3>
  <p class="text-gray-700 mt-1">{movie.description}</p>
  <div class="mt-4 flex justify-between">
    <span class="font-semibold">
      {movie.rating}
    </span>

    <span class="text-sm font-semibold text-gray-500">
      {movie.status}
    </span>
  </div>
</div>

<style>
  /* CSS goes here */
</style>