  <script lang="ts">
  
    let pageMeta = $state({
      title: 'Movie Board 🍿',
      description: 'Manage and pin your movies'
    });
  </script>

<svelte:head>
	<title>{pageMeta.title}</title>
	<meta name="description" content="{pageMeta.description}" />
</svelte:head>

<div class="home-page">
  Home page
</div>
