<script lang="ts">
	import { ScrollState } from 'runed';

	export type LocalEntry = {
		'CBS-code': string;
		Overheidsinstantie: string;
		Titel: string;
		Locatie: string;
		'Wettelijke grondslag': string;
		'Aantal beschikkingen': string;
		'Soorten beschikkingen': string;
		'Integraal of register': string;
		Periode: string;
		'Aanwezige metadata (filters)': string;
		'Laatste update': string;
	};

	let {
		entries = [],
		name,
		dialog = $bindable()
	}: {
		entries: LocalEntry[];
		name: string;
		dialog: HTMLDialogElement | undefined;
	} = $props();

	let el = $state<HTMLDivElement>();
	const scroll = new ScrollState({ element: () => el });

	function formatDate(value: string): string {
		if (!value) return '';
		const date = new Date(value);
		if (isNaN(date.getTime())) return value;
		return date.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
	}

	const nf = new Intl.NumberFormat('nl-NL');

	function displayValue(key: keyof LocalEntry, value: string): string {
		if (key === 'Laatste update') return formatDate(value);
		if (key === 'Aantal beschikkingen') return nf.format(Number(value)) + ' documenten';
		return value;
	}

	const fields: { key: keyof LocalEntry; label: string }[] = [
		{ key: 'Titel', label: 'Titel' },
		{ key: 'Wettelijke grondslag', label: 'Wettelijke grondslag' },
		{ key: 'Aantal beschikkingen', label: 'Aantal beschikkingen' },
		{ key: 'Soorten beschikkingen', label: 'Soorten beschikkingen' },
		{ key: 'Integraal of register', label: 'Integraal of register' },
		{ key: 'Periode', label: 'Periode' },
		{ key: 'Aanwezige metadata (filters)', label: 'Aanwezige metadata' },
		{ key: 'Laatste update', label: 'Laatste update' }
	];

	const isIntegral = (entry: LocalEntry) =>
		entry['Integraal of register']?.toLowerCase().includes('integraal');

	const sortedEntries = $derived(entries.toSorted((a, b) => +isIntegral(b) - +isIntegral(a)));
</script>

<dialog
	bind:this={dialog}
	class="m-0 w-full max-w-full flex-col border-none bg-white p-0 text-bib-blue backdrop:bg-bib-dark-blue/50 max-sm:h-full max-sm:max-h-full sm:m-auto sm:max-h-[80vh] sm:w-content-sm sm:border sm:border-solid sm:border-bib-dark-blue"
>
	<div class="sticky top-0 flex items-start justify-between gap-6 bg-bib-blue p-6 text-white">
		<h2 class="text-xl font-semibold">{name}</h2>
		<button onclick={() => dialog?.close()} aria-label="Sluiten" class="flex cursor-pointer">
			<span class="my-0.5 iconify size-6 tabler--x"></span>
		</button>
	</div>

	{#key name}
		<div class="relative flex-1 overflow-y-auto p-6 sm:max-h-[60vh]" bind:this={el}>
			{#each sortedEntries as entry, i}
				{#if i > 0}
					<hr class="my-6 border-bib-dark-blue/20" />
				{/if}

				<div class="space-y-3">
					{#each fields as { key, label }}
						{#if entry[key] && entry[key] !== 'geen'}
							<div>
								<dt class="text-sm font-semibold tracking-wide text-bib-blue/60 uppercase">
									{label}
								</dt>
								<dd class="text-lg wrap-break-word">{displayValue(key, entry[key])}</dd>
							</div>
						{/if}
					{/each}

					{#if entry.Locatie}
						<div>
							<a
								href={entry.Locatie}
								target="_blank"
								rel="noopener"
								class="inline-flex items-center gap-1 font-semibold text-bib-blue underline decoration-2"
							>
								Bekijk beschikkingen
								<span class="iconify size-4 tabler--external-link"></span>
							</a>
						</div>
					{/if}
				</div>
			{/each}

			{#if entries.length === 0}
				<p>Geen gegevens beschikbaar.</p>
			{/if}

			{#if scroll.y === 0 && el && el.scrollHeight > el.clientHeight + 100}
				<button
					class="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer border bg-white px-4 py-2 font-medium"
					onclick={() => el?.scrollBy({ top: el.clientHeight - 100, behavior: 'smooth' })}
				>
					Scroll voor meer
				</button>
			{/if}
		</div>
	{/key}
</dialog>

<style>
	dialog[open] {
		display: flex;
		overflow: hidden;
	}
</style>
