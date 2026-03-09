<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchCSV } from '$lib/csv';
	import Popup, { type LocalEntry } from './popup.svelte';
	import { ScrollState } from 'runed';
	import { fade } from 'svelte/transition';

	type NationalGroup = {
		name: string;
		entries: LocalEntry[];
		stars: number;
	};

	function getStars(entries: LocalEntry[]): number {
		const types = entries.map((e) => e['Integraal of register']?.toLowerCase().trim());
		if (types.some((t) => t?.includes('integraal'))) return 5;
		if (types.some((t) => t?.includes('register'))) return 4;
		return 4;
	}

	let groups: NationalGroup[] = $state([]);
	let dialogEl: HTMLDialogElement | undefined = $state();
	let popupName = $state('');
	let popupEntries: LocalEntry[] = $state([]);

	onMount(async () => {
		const entries = await fetchCSV('/nationaal.csv');

		const map = new Map<string, LocalEntry[]>();
		for (const entry of entries) {
			const name = entry.Overheidsinstantie;
			if (!name) continue;
			if (!map.has(name)) map.set(name, []);
			map.get(name)!.push(entry);
		}

		groups = Array.from(map.entries())
			.map(([name, entries]) => ({
				name,
				entries,
				stars: getStars(entries)
			}))
			.toSorted((a, b) => a.name.localeCompare(b.name));
	});

	function openPopup(group: NationalGroup) {
		popupName = group.name;
		popupEntries = group.entries;
		dialogEl?.showModal();
	}

	let el = $state<HTMLDivElement>();

	const scroll = new ScrollState({ element: () => el });
</script>

<div
	class="relative overflow-y-auto border border-bib-dark-blue max-sm:max-h-120 sm:aspect-square"
	bind:this={el}
>
	{#each groups as group, i}
		{#if i > 0}
			<hr class="border-bib-dark-blue/20" />
		{/if}
		<button
			class="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left"
			onclick={() => openPopup(group)}
		>
			<span class="min-w-0 truncate">{group.name}</span>
			<span
				class={[
					'flex shrink-0 items-center gap-1 border px-4 py-1.5 text-xl font-semibold',
					group.stars === 5
						? 'border-bib-green bg-bib-green/20 text-bib-green'
						: 'border-bib-lime bg-bib-lime/10 text-bib-lime'
				]}
			>
				{group.stars} ★
			</span>
		</button>
	{/each}

	{#if scroll.y === 0}
		<button
			class="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer border bg-white px-4 py-2 font-medium"
			onclick={() => el?.scrollBy({ top: el.clientHeight - 100, behavior: 'smooth' })}
		>
			Scroll voor meer
		</button>
	{/if}
</div>

<Popup bind:dialog={dialogEl} entries={popupEntries} name={popupName} />
