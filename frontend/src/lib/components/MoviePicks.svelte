<script lang="ts">
	import MovieCard from './MovieCard.svelte';
	import type { TMovie } from '$lib/types/TMovie';

	interface Props {
		movies: TMovie[];
	}

	let { movies }: Props = $props();
</script>

<div class="movie-picks py-4">
	<h2 class="text-2xl text-center">Movie Picks</h2>

	<div class="movie-cards mt-8 pb-8 flex flex-col items-center gap-4">
			{#each movies as movie (movie.name)}
				<MovieCard movie={movie} />
			{/each}

	</div>
</div>

<style>
	.movie-cards {
		height: 90vh;
		overflow-y: scroll;
		scroll-behavior: smooth;
	}
</style>
