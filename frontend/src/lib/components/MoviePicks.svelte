<script lang="ts">
	import MovieCard from './MovieCard.svelte';
	import type { TMovie } from '$lib/types/TMovie';

	interface Props {
		movies: TMovie[];
	}

	let { movies }: Props = $props();
</script>

<div class="movie-picks">
	<h2 class="text-3xl text-center font-black text-orange-500">Weekly Picks</h2>

	<div class="movie-cards flex gap-4">
		{#each movies as movie (movie.name)}
			{#if movie.status === 'in pick'}
				<MovieCard {movie} />
			{/if}
		{/each}
	</div>
</div>

<style>
	.movie-picks {
		margin-top: 2rem;
	}
	.movie-cards {
		overflow-x: scroll;
		padding-left: 2rem;
		padding-right: 2rem;
		margin-top: 4rem;
	}
</style>
