<script lang="ts">
	import type { Snippet } from 'svelte';

	const props: {
		title: string;
		open?: boolean;
		children: Snippet;
	} = $props();
</script>

<details class="group my-10" open={props.open}>
	<summary class="mb-4 flex cursor-pointer justify-between">
		<h3 class="text-xl font-semibold">{props.title}</h3>
		<span class="iconify size-5 tabler--chevron-right group-open:rotate-90"></span>
	</summary>

	{@render props.children()}
</details>
