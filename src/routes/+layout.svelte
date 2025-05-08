<script lang="ts">
	let { children } = $props();
  import "../app.css";

  // Components
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<!-- <Navbar /> -->
<div class="h-full">
  {@render children()}
</div>