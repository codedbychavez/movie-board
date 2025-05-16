<script lang="ts">
	import MoviePicks from '$lib/components/MoviePicks.svelte';
	import WatchList from '$lib/components/WatchList.svelte';
	import type { PageProps } from '../$types';

	let pageMeta = $state({
		title: 'Movie Board 🍿',
		description: 'Manage and pin your movies'
	});

	let { data }: PageProps = $props();

	let pageData = $state(data);
</script>

<svelte:head>
	<title>{pageMeta.title}</title>
	<meta name="description" content={pageMeta.description} />
</svelte:head>

<div class="home-page">
	<div class="movie-picks-wrapper">
		<MoviePicks movies={pageData.movies} />
	</div>

	<div class="watch-list-wrapper">
		<WatchList movies={pageData.movies} />
	</div>
</div>

<style>
	.home-page {
		max-width: 1440px;
		margin: 0 auto;
	}

	.watch-list-wrapper {
		margin-top: 4rem;
	}
</style>
