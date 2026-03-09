<script lang="ts">
	import type { Snippet } from 'svelte';

	const props: {
		title: string;
		children: Snippet;
	} = $props();
</script>

<section class="mx-auto my-32 w-content-lg bg-bib-yellow text-bib-dark-blue sm:my-36">
	<details class="group">
		<summary class="flex cursor-pointer flex-wrap items-center justify-between gap-6 p-6">
			<div class="bg-white px-4 py-2 font-semibold text-bib-blue">CASE</div>
			<h2 class="grow text-xl font-semibold">{props.title}</h2>
			<div class="flex items-center gap-6">
				<span class="text-right text-lg font-medium">Lees meer</span>
				<span class="iconify size-5 tabler--chevron-right group-open:rotate-90"></span>
			</div>
		</summary>

		<div class="gap-6 space-y-4 p-6 pt-0 md:columns-2">
			{@render props.children()}
		</div>
	</details>
</section>
