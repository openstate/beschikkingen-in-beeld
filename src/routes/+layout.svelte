<script lang="ts">
	import '@fontsource-variable/lora';
	import '@fontsource-variable/work-sans';
	import './layout.css';

	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

{@render children()}
