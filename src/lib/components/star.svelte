<script lang="ts">
	import type { Snippet } from 'svelte';

	const props: {
		level: number;
		title: string;
		children?: Snippet;
	} = $props();

	const baseClasses =
		'flex shrink-0 items-center gap-2 border w-18 justify-center px-4 py-1.5 text-xl font-semibold';

	const colorClasses = $derived(
		props.level === 4
			? 'border-bib-lime bg-bib-lime/10 text-bib-lime'
			: props.level === 5
				? 'border-bib-green bg-bib-green/20 text-bib-green'
				: 'border-bib-dark-blue bg-white text-bib-blue'
	);
</script>

<div>
	<div class="mb-6 flex items-center gap-6">
		<div class={[baseClasses, colorClasses]}>
			{props.level} ★
		</div>
		<h3 class="text-lg font-medium">{props.title}</h3>
	</div>

	{@render props.children?.()}
</div>
