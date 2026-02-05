<script lang="ts">
	import type { Snippet } from 'svelte';

	const props: {
		level: number;
		title: string;
		children: Snippet;
	} = $props();

	const baseClasses = 'flex items-center gap-2 border px-4 py-1.5 text-xl font-semibold';

	const colorClasses = $derived(
		props.level === 4
			? 'border-bib-lime bg-bib-light-lime text-bib-lime'
			: props.level === 5
				? 'border-bib-green bg-bib-light-green text-bib-green'
				: 'border-bib-dark-blue bg-white text-bib-blue'
	);
</script>

<div>
	<div class="mb-6 flex items-center gap-6">
		<div class={[baseClasses, colorClasses]}>
			{props.level}
			<span class="mb-px iconify size-4 tabler--star-filled" aria-label="ster"></span>
		</div>
		<h3 class="text-xl font-semibold">{props.title}</h3>
	</div>

	{@render props.children()}
</div>
