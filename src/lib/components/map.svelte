<script lang="ts">
	import 'leaflet/dist/leaflet.css';
	import { onMount } from 'svelte';
	import { fetchCSV } from '$lib/csv';
	import Popup, { type LocalEntry } from './popup.svelte';

	let dialogEl: HTMLDialogElement | undefined = $state();
	let popupName = $state('');
	let popupEntries: LocalEntry[] = $state([]);

	onMount(async () => {
		const [L, allEntries] = await Promise.all([import('leaflet'), fetchCSV('/lokaal.csv')]);

		const codeToEntries = new Map<string, LocalEntry[]>();
		for (const entry of allEntries) {
			const code = entry['CBS-code'];
			if (!codeToEntries.has(code)) codeToEntries.set(code, []);
			codeToEntries.get(code)!.push(entry);
		}

		const map = L.map('map', {
			zoomSnap: 0.1
		}).setView([52.1326, 5.2913], 7.5);
		map.attributionControl.setPrefix(false);

		L.tileLayer(
			'https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0/grijs/EPSG:3857/{z}/{x}/{y}.png',
			{
				attribution:
					'Kaartgegevens &copy; <a href="https://pdok.nl/" target="_blank" rel="noopener">PDOK</a>'
			}
		).addTo(map);

		const rootStyle = getComputedStyle(document.documentElement);
		const limeColor = rootStyle.getPropertyValue('--color-bib-lime').trim();
		const greenColor = rootStyle.getPropertyValue('--color-bib-green').trim();

		function getStarColor(entries: LocalEntry[]): string {
			const types = entries.map((e) => e['Integraal of register']?.toLowerCase().trim());
			if (types.some((t) => t?.includes('integraal'))) return greenColor;
			return limeColor;
		}

		const layerConfigs = {
			Provincies: { url: '/provincie_2026.geojson', name: 'statnaam', code: 'statcode', prefix: 'PV' },
			Waterschappen: { url: '/waterschap_2026.geojson', name: 'naam', code: 'waterschapcode', prefix: 'WS' },
			Gemeenten: { url: '/gemeente_2026.geojson', name: 'statnaam', code: 'statcode', prefix: 'GM' }
		};

		const layers: Record<string, any> = {};
		const loadedLayers = new Set<string>();

		const loadLayerData = async (name: string) => {
			if (loadedLayers.has(name)) return;
			const config = layerConfigs[name as keyof typeof layerConfigs];
			if (!config) return;

			const res = await fetch(config.url);
			const data = await res.json();
			layers[name].addData(data);
			loadedLayers.add(name);
		};

		for (const name in layerConfigs) {
			const config = layerConfigs[name as keyof typeof layerConfigs];
			layers[name] = L.geoJSON(null, {
				style: (feature) => {
					const rawCode = feature?.properties[config.code] ?? '';
					const fullCode = rawCode.startsWith(config.prefix) ? rawCode : config.prefix + rawCode;
					const entries = codeToEntries.get(fullCode);
					return {
						fillColor: entries ? getStarColor(entries) : '#fff',
						fillOpacity: entries ? (getStarColor(entries) === greenColor ? 0.5 : 0.25) : 0.5,
						color: '#333',
						weight: 1
					};
				},
				onEachFeature: (feature, layer) => {
					const featureName = feature.properties[config.name];
					const rawCode = feature.properties[config.code] ?? '';
					const fullCode = rawCode.startsWith(config.prefix) ? rawCode : config.prefix + rawCode;
					const entries = codeToEntries.get(fullCode);

					if (entries) {
						layer.on('click', () => {
							popupName = featureName;
							popupEntries = entries;
							dialogEl?.showModal();
						});
					}
				}
			});
		}

		const defaultLayer = 'Provincies';
		layers[defaultLayer].addTo(map);
		loadLayerData(defaultLayer);

		L.control.layers(layers, undefined, { collapsed: false }).addTo(map);

		map.on('baselayerchange', (e: any) => {
			loadLayerData(e.name);
		});
	});
</script>

<div class="mb-20 aspect-square border border-bib-dark-blue" id="map"></div>

<Popup bind:dialog={dialogEl} entries={popupEntries} name={popupName} />
