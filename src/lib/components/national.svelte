<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchCSV } from '$lib/csv';
	import Popup, { type LocalEntry } from './popup.svelte';
	import { ScrollState } from 'runed';

	type NationalGroup = {
		name: string;
		entries: LocalEntry[];
		stars: number;
		type: string;
		typeOrder: number;
	};

	const typeLabels: Record<string, string> = {
		ministerie: 'Ministeries',
		dienst: 'Diensten en agentschappen',
		zbo: 'Zelfstandige bestuursorganen'
	};

	const typeOrder: Record<string, number> = { ministerie: 0, dienst: 1, zbo: 2 };

	function getStars(entries: LocalEntry[]): number {
		const types = entries.map((e) => e['Integraal of register']?.toLowerCase().trim());
		if (types.some((t) => t?.includes('integraal'))) return 5;
		if (types.some((t) => t?.includes('register'))) return 4;
		return 4;
	}

	type Section = { label: string; groups: NationalGroup[] };
	let sections: Section[] = $state([]);
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

		const groups: NationalGroup[] = Array.from(map.entries()).map(([name, entries]) => {
			const t = entries[0].Type || 'zbo';
			return {
				name,
				entries,
				stars: getStars(entries),
				type: t,
				typeOrder: typeOrder[t] ?? 2
			};
		});

		groups.sort(
			(a, b) => a.typeOrder - b.typeOrder || b.stars - a.stars || a.name.localeCompare(b.name)
		);

		const sectionMap = new Map<string, Section>();
		for (const g of groups) {
			const key = `${g.typeOrder}`;
			if (!sectionMap.has(key))
				sectionMap.set(key, { label: typeLabels[g.type] || g.type, groups: [] });
			sectionMap.get(key)!.groups.push(g);
		}
		sections = Array.from(sectionMap.values());
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
	{#each sections as section}
		<div class="sticky top-0 z-10 border-y border-bib-dark-blue/20 bg-gray-100 px-6 py-2">
			<span class="text-xs font-semibold tracking-wider text-bib-blue/60 uppercase"
				>{section.label}</span
			>
		</div>
		{#each section.groups as group, i}
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
