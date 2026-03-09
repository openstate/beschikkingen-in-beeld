<script lang="ts">
	import '@fontsource-variable/lora';
	import '@fontsource-variable/work-sans';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" type="image/svg+xml" href="/logo_CITADOG.svg" />
	<title>Beschikkingen in Beeld</title>
	<meta
		name="description"
		content="Beschikkingen in Beeld biedt een actueel overzicht van de openbaarmaking van individuele overheidsbesluiten."
	/>
	<meta name="author" content="Tilburg University, Open State Foundation, Centerdata" />
	<meta property="og:title" content="Beschikkingen in Beeld" />
	<meta
		property="og:description"
		content="Beschikkingen in Beeld biedt een actueel overzicht van de openbaarmaking van individuele overheidsbesluiten."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/logo_CITADOG.svg" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Beschikkingen in Beeld" />
	<meta
		name="twitter:description"
		content="Beschikkingen in Beeld biedt een actueel overzicht van de openbaarmaking van individuele overheidsbesluiten."
	/>
	<meta name="twitter:image" content="/logo_CITADOG.svg" />
</svelte:head>

{@render children()}
