<script lang="ts">
import StarIcon from "./icons/StarIcon.svelte";
import type { TMovie } from "$lib/types/TMovie";

interface Props {
  movie: TMovie;
}

let { movie }: Props = $props();

</script>

<div class="movie-card w-2xs min-h-32 border border-gray-200 rounded shadow-sm p-3 shrink-0 bg-gray-50">
  <h3 class="text-lg font-bold text-gray-700">{movie.name}</h3>
  <p class="text-gray-500 mt-1">{movie.description}</p>
  <div class="mt-4 flex justify-between">
    <span class="flex gap-1 font-semibold text-yellow-700">
      {movie.rating} <StarIcon />
    </span>

    <button class="bg-teal-500 text-green-50 px-3 py-1 rounded-full cursor-pointer">
      {movie.status}
    </button>

  </div>
</div>

<style>
  /* CSS goes here */
</style>