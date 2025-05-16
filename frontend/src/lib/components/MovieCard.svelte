<script lang="ts">
	import StarIcon from './icons/StarIcon.svelte';
	import type { TMovie, TMovieStatus } from '$lib/types/TMovie';

	interface Props {
		movie: TMovie;
	}

	let movieStatuses: TMovieStatus[] = ['in pick', 'to watch', 'in watching', 'in done'];

	let { movie }: Props = $props();

	let selectedStatus: TMovieStatus = $state(movie.status);

	function updateMovieStatus(movie: TMovie) {
		console.log(movie.status, selectedStatus);
		movie.status = selectedStatus;
	}
</script>

<div
	class="movie-card max-w-2xs min-h-32 border border-gray-200 rounded shadow-sm p-3 shrink-0 bg-gray-50"
>
	<h3 class="text-lg font-bold text-gray-700">{movie.name}</h3>
	<p class="text-gray-500 mt-1">{movie.description}</p>
	<div class="mt-4 flex flex-wrap gap-2 justify-between">
		<span class="flex gap-1 font-semibol text-orange-600">
			{movie.rating}
			<StarIcon />
		</span>

		<select
			bind:value={selectedStatus}
			onchange={() => updateMovieStatus(movie)}
			class="bg-purple-500 rounded-full px-2 py-1 text-white"
		>
			<option selected disabled value="Move to">Move to</option>
			{#each movieStatuses as movieStatus}
				<option value={movieStatus} class="text-white">{movieStatus}</option>
			{/each}
		</select>
	</div>
</div>

<style>
	.movie-card {
		margin-bottom: 2rem;
	}
</style>
