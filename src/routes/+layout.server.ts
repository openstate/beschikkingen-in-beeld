export const prerender = true;

export async function load() {
	return { updated: new Date().toLocaleDateString('nl-NL', { dateStyle: 'full' }) };
}
