<script lang="ts">
	import MovieCard from './MovieCard.svelte';
	import { type TMovie } from '$lib/types/TMovie';

	interface Props {
		movies: TMovie[];
	}

	let { movies }: Props = $props();
</script>

<div class="watch-list h-full">
	<h2 class="text-3xl text-center font-black text-orange-500">My Watchlist</h2>
	<div class="columns flex justify-between mt-8">
		<div class="col-1 w-1/3">
			<h2 class="text-xl text-center bg-gray-200 px-2 py-1 border-r border-r-gray-700">To Watch</h2>
			<div class="movie-cards mt-8 pb-8 flex flex-col items-center gap-4">
				{#each movies as movie (movie.name)}
					{#if movie.status === 'to watch'}
						<MovieCard {movie} />
					{/if}
				{/each}
			</div>
		</div>
		<div class="col-2 w-1/3">
			<h2 class="text-xl text-center bg-gray-200 px-2 py-1 border-r border-r-gray-700">Watching</h2>
			<div class="movie-cards mt-8 pb-8 flex flex-col items-center gap-4">
				{#each movies as movie (movie.name)}
					{#if movie.status === 'in watching'}
						<MovieCard {movie} />
					{/if}
				{/each}
			</div>
		</div>
		<div class="col-3 w-1/3">
			<h2 class="text-xl text-center bg-gray-200 px-2 py-1">Done</h2>
			<div class="movie-cards mt-8 pb-8 flex flex-col items-center gap-4">
				{#each movies as movie (movie.name)}
					{#if movie.status === 'in done'}
						<MovieCard {movie} />
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.watch-list {
		padding: 0 2rem;
	}
</style>
