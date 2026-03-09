<script lang="ts">
	import type { Snippet } from 'svelte';

	const props: {
		title: string;
		open?: boolean;
		children: Snippet;
	} = $props();
</script>

<details class="group my-6 border p-5.5" open={props.open}>
	<summary class="group-open:mb-3 flex cursor-pointer items-center gap-6 justify-between">
		<h3 class="text-xl font-semibold">{props.title}</h3>
		<span class="iconify size-5 tabler--chevron-right group-open:rotate-90"></span>
	</summary>

	{@render props.children()}
</details>
