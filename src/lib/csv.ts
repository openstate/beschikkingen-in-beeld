import { parse } from 'papaparse';
import type { LocalEntry } from '$lib/components/popup.svelte';

export async function fetchCSV(url: string): Promise<LocalEntry[]> {
	const res = await fetch(url);
	const text = await res.text();
	const { data } = parse<LocalEntry>(text, { header: true, skipEmptyLines: true });
	return data;
}
