<script lang="ts">
	import MovieCard from './MovieCard.svelte';
	import { type TMovie, EMovieStatus } from '$lib/types/TMovie';

	interface Props {
		movies: TMovie[];
	}

	let { movies }: Props = $props();
</script>

<div class="watch-list py-4 h-full">
	<h2 class="text-2xl text-center font-black">My Watch List</h2>
	<div class="columns flex justify-between mt-8 h-full">
		<div class="col-1 border-r border-gray-200 w-1/3">
			<h2 class="text-xl text-center">To Watch</h2>
			<div class="movie-cards mt-8 pb-8 flex flex-col items-center gap-4">
				{#each movies as movie (movie.name)}
					{#if movie.status === EMovieStatus.toWatch}
						<MovieCard {movie} />
					{/if}
				{/each}
			</div>
		</div>
		<div class="col-2 border-r border-gray-200 w-1/3">
			<h2 class="text-xl text-center">Watching</h2>
			<div class="movie-cards mt-8 pb-8 flex flex-col items-center gap-4">
				{#each movies as movie (movie.name)}
					{#if movie.status === EMovieStatus.inWatching}
						<MovieCard {movie} />
					{/if}
				{/each}
			</div>
		</div>
		<div class="col-3 border-r border-gray-200 w-1/3">
			<h2 class="text-xl text-center">Done</h2>
			<div class="movie-cards mt-8 pb-8 flex flex-col items-center gap-4">
				{#each movies as movie (movie.name)}
					{#if movie.status === EMovieStatus.inDone}
						<MovieCard {movie} />
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
