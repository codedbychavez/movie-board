<script lang="ts">
	import MovieCard from './MovieCard.svelte';

	import type { TMovie } from '$lib/types/TMovie';

	interface Props {
		movies: TMovie[];
	}

	let { movies }: Props = $props();
</script>

<div class="movie-picks">
	<h2 class="text-2xl text-center">Movie Picks</h2>

	<div class="movie-cards px-4 mt-8">
		{#each movies as movie (movie.name)}
			<MovieCard movie={movie} />
		{/each}
	</div>
</div>
