<script lang="ts">
	let { children } = $props();
  import "../app.css";

  // Components
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />

{@render children()}