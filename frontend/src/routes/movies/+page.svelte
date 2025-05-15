<script lang="ts">
	import MoviePicks from '$lib/components/MoviePicks.svelte';
	import WatchList from '$lib/components/WatchList.svelte';
	import type { PageProps } from '../$types';

	let pageMeta = $state({
		title: 'Movie Board 🍿',
		description: 'Manage and pin your movies'
	});

	let { data }: PageProps = $props();

	let pageData = $state(data)

</script>

<svelte:head>
	<title>{pageMeta.title}</title>
	<meta name="description" content={pageMeta.description} />
</svelte:head>

<div class="home-page flex w-full h-full">
	<div class="movie-picks-wrapper min-w-1/4 border-r border-gray-200">
		<MoviePicks movies={pageData.movies} />
	</div>
	<div class="watch-list-wrapper w-full">
		<WatchList movies={pageData.movies} />
	</div>
</div>
