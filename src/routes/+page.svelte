<script lang="ts">
	import MoviePicks from '$lib/components/MoviePicks.svelte';
	import WatchList from '$lib/components/WatchList.svelte';

	let pageMeta = $state({
		title: 'Movie Board 🍿',
		description: 'Manage and pin your movies'
	});
</script>

<svelte:head>
	<title>{pageMeta.title}</title>
	<meta name="description" content={pageMeta.description} />
</svelte:head>

<div class="home-page flex w-full h-full py-8">
	<div class="movie-picks-wrapper w-1/4 border-r border-gray-200">
		<MoviePicks />
	</div>
	<div class="watch-list-wrapper w-full">
		<WatchList />
	</div>
</div>
