<script lang="ts">
	import Case from '$lib/components/case.svelte';
	import Faq from '$lib/components/faq.svelte';
	import Map from '$lib/components/map.svelte';
	import National from '$lib/components/national.svelte';
	import Star from '$lib/components/star.svelte';
</script>

<main class="text-bib-blue">
	<header class="relative overflow-clip bg-bib-blue">
		<div
			class="pointer-events-none absolute top-1/2 left-1/2 size-240 -translate-1/2 rounded-full border-64 border-white opacity-10 md:size-[max(90vw,1200px)]"
		></div>
		<div
			class="pointer-events-none absolute top-1/2 left-1/2 size-190 -translate-1/2 rounded-full border-32 border-white opacity-10 md:size-[max(70vw,960px)]"
		></div>
		<div
			class="pointer-events-none absolute top-1/2 left-1/2 size-160 -translate-1/2 rounded-full border-16 border-white opacity-10 md:size-[max(55vw,800px)]"
		></div>

		<div class="mx-auto max-w-164 px-12 py-36 text-center text-balance text-white">
			<h1 class="mb-10 font-serif text-4xl font-bold md:text-5xl">Beschikkingen in Beeld</h1>
			<p class="mb-10 text-xl">
				Beschikkingen in Beeld biedt een actueel overzicht van de openbaarmaking van individuele
				overheidsbesluiten.
			</p>

			<!-- <div class="flex justify-center gap-6">
				<a
					href="#wie"
					class="bg-white px-6 py-2.5 text-xl font-semibold text-bib-dark-blue transition hover:brightness-95"
				>
					Wie?
				</a>
				<a
					href="#hoe"
					class="bg-white px-6 py-2.5 text-xl font-semibold text-bib-dark-blue transition hover:brightness-95"
				>
					Hoe?
				</a>
				<a
					href="#wat"
					class="bg-white px-6 py-2.5 text-xl font-semibold text-bib-dark-blue transition hover:brightness-95"
				>
					Wat?
				</a>
			</div> -->
		</div>
	</header>

	<div
		class="relative mx-auto -mt-9 w-content-lg bg-bib-yellow p-6 text-center font-medium text-balance text-bib-dark-blue"
	>
		Een onderzoek binnen
		<a href="https://citadog.nl/" target="_blank" class="font-semibold underline decoration-2">
			CITaDOG
		</a>
		tussen
		<a
			href="https://tilburguniversity.edu/"
			target="_blank"
			class="font-semibold underline decoration-2"
		>
			Tilburg University
		</a>,
		<a href="https://openstate.eu/" target="_blank" class="font-semibold underline decoration-2">
			Open State Foundation
		</a>
		en
		<a href="https://centerdata.nl/" target="_blank" class="font-semibold underline decoration-2">
			Centerdata
		</a>.
	</div>

	<section class="mx-auto my-32 w-content-md sm:my-36">
		<h2 class="mb-10 text-center text-2xl font-semibold">Over beschikkingen</h2>

		<p class="mb-6 text-bib-blue">
			Beschikkingen zijn <strong class="font-semibold"
				>overheidsbesluiten voor individuele gevallen</strong
			>. Voorbeelden hiervan zijn een vergunning, een subsidie, een toeslag of een bestuurlijke
			boete. Op grond van de Wet open overheid zullen overheden in de toekomst ook hun beschikkingen
			openbaar moeten maken. Daarmee komt een beschikking dus niet langer alleen beschikbaar voor
			degene tot wie die is gericht, maar voor iedereen.
		</p>

		<p class="text-bib-blue">
			Sommige overheden zijn hiermee al aan de slag gedaan. Beschikkingen in Beeld brengt deze
			openbaarmakingspraktijken in kaart en reikt door middel van 'naming &amp; faming' voorbeelden
			aan van succesvolle openbaarmaking.
		</p>
	</section>

	<Case title="Gemeente Lorem">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend volutpat augue, in
			euismod nisi egestas et. Sed accumsan eu ligula vitae feugiat. Sed at mauris euismod, vehicula
			sapien quis, sollicitudin ipsum. Maecenas eu porta magna. Aenean suscipit, tortor ac venenatis
			convallis, felis ipsum malesuada leo, eu cursus orci lacus vel ex. Sed ultricies nulla ac
			viverra efficitur. Suspendisse tincidunt, ligula quis porta tincidunt, tortor libero aliquet
			ante, quis viverra ipsum ex.
		</p>
		<p>
			Nunc viverra libero neque. Aliquam dignissim facilisis magna, at placerat metus semper vitae.
			Ut suscipit pulvinar lectus vel sodales. Vivamus sed lacus interdum mauris fermentum feugiat
			et non massa. Sed dictum velit elementum turpis efficitur tincidunt. Nunc convallis nunc non
			felis convallis pharetra.
		</p>
		<p>
			Nullam tristique ultrices nisi, sit amet auctor eros eleifend eget. Mauris lacinia placerat
			erat id malesuada. Duis tristique magna ut pharetra porttitor. Fusce eget hendrerit purus.
			Donec vehicula congue risus, vel maximus magna tincidunt vitae. Nullam convallis eros ac quam
			finibus facilisis. Fusce convallis arcu et diam sollicitudin, at suscipit metus tristique.
		</p>
	</Case>

	<section class="mx-auto my-32 w-content-md sm:my-36">
		<h2 id="hoe" class="mb-10 text-center text-2xl font-semibold">Vijfsterrenmodel</h2>

		<p class="mb-10 text-bib-blue">
			Om de voortgang van overheden bij het openbaar maken van beschikkingen te waarderen, hanteren
			wij een vijfsterrenmodel. Hoe meer sterren, hoe verder een overheid is met openbaarmaking.
		</p>

		<div class="space-y-8">
			<Star level={1} title="Informatie beschikbaar over over indienen Woo-verzoek" />
			<Star level={2} title="Openbaarmaking van eerdere Woo-besluiten" />
			<Star level={3} title="Openbaarmaking van andere categorieën overheidsinformatie" />
			<Star level={4} title="Gedeeltelijke openbaarmaking van beschikkingen" />
			<Star level={5} title="Integrale openbaarmaking van beschikkingen" />
		</div>
	</section>

	<Case title="Provincie Dolor">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend volutpat augue, in
			euismod nisi egestas et. Sed accumsan eu ligula vitae feugiat. Sed at mauris euismod, vehicula
			sapien quis, sollicitudin ipsum. Maecenas eu porta magna. Aenean suscipit, tortor ac venenatis
			convallis, felis ipsum malesuada leo, eu cursus orci lacus vel ex. Sed ultricies nulla ac
			viverra efficitur. Suspendisse tincidunt, ligula quis porta tincidunt, tortor libero aliquet
			ante, quis viverra ipsum ex.
		</p>
		<p>
			Nunc viverra libero neque. Aliquam dignissim facilisis magna, at placerat metus semper vitae.
			Ut suscipit pulvinar lectus vel sodales. Vivamus sed lacus interdum mauris fermentum feugiat
			et non massa. Sed dictum velit elementum turpis efficitur tincidunt. Nunc convallis nunc non
			felis convallis pharetra.
		</p>
		<p>
			Nullam tristique ultrices nisi, sit amet auctor eros eleifend eget. Mauris lacinia placerat
			erat id malesuada. Duis tristique magna ut pharetra porttitor. Fusce eget hendrerit purus.
			Donec vehicula congue risus, vel maximus magna tincidunt vitae. Nullam convallis eros ac quam
			finibus facilisis. Fusce convallis arcu et diam sollicitudin, at suscipit metus tristique.
		</p>
	</Case>

	<section class="mx-auto my-32 w-content-md sm:my-36">
		<h2 id="hoe" class="mb-10 text-center text-2xl font-semibold">Naming &amp; faming</h2>

		<p class="mb-6 text-bib-blue">
			Een van de redenen voor openbaarmaking van beschikkingen is <strong class="font-semibold">
				naming&nbsp;&amp;&nbsp;shaming
			</strong>: het waarschuwen van het publiek voor een overtreder.
		</p>

		<p class="mb-6 text-bib-blue">
			Beschikkingen in Beeld kiest echter voor <strong class="font-semibold">
				naming&nbsp;&amp;&nbsp;faming
			</strong>: voorbeelden tonen van overheden die al wel beschikkingen openbaar maken op hun
			website, en dus vier sterren (lichtgroen) of vijf sterren (donkergroen) scoren.
		</p>

		<p class="mb-20 text-bib-blue">
			Klik op een overheid op de kaart van lokale overheden of de lijst van nationale overheden om
			meer te leren over hun openbaarmakingspraktijken.
		</p>

		<h3 class="mb-10 text-center text-xl font-semibold">Lokale overheden</h3>

		<Map />

		<h3 class="mb-10 text-center text-xl font-semibold">Nationale overheden</h3>

		<div class="mb-20">
			<National />
		</div>
	</section>

	<Case title="Autoriteit Consectetur Adipiscing">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend volutpat augue, in
			euismod nisi egestas et. Sed accumsan eu ligula vitae feugiat. Sed at mauris euismod, vehicula
			sapien quis, sollicitudin ipsum. Maecenas eu porta magna. Aenean suscipit, tortor ac venenatis
			convallis, felis ipsum malesuada leo, eu cursus orci lacus vel ex. Sed ultricies nulla ac
			viverra efficitur. Suspendisse tincidunt, ligula quis porta tincidunt, tortor libero aliquet
			ante, quis viverra ipsum ex.
		</p>
		<p>
			Nunc viverra libero neque. Aliquam dignissim facilisis magna, at placerat metus semper vitae.
			Ut suscipit pulvinar lectus vel sodales. Vivamus sed lacus interdum mauris fermentum feugiat
			et non massa. Sed dictum velit elementum turpis efficitur tincidunt. Nunc convallis nunc non
			felis convallis pharetra.
		</p>
		<p>
			Nullam tristique ultrices nisi, sit amet auctor eros eleifend eget. Mauris lacinia placerat
			erat id malesuada. Duis tristique magna ut pharetra porttitor. Fusce eget hendrerit purus.
			Donec vehicula congue risus, vel maximus magna tincidunt vitae. Nullam convallis eros ac quam
			finibus facilisis. Fusce convallis arcu et diam sollicitudin, at suscipit metus tristique.
		</p>
	</Case>

	<section class="mx-auto my-32 w-content-md sm:my-36">
		<h2 id="wat" class="mb-10 text-center text-2xl font-semibold">Veelgestelde vragen</h2>

		<Faq title="Waarom maak je beschikkingen openbaar?" open>
			<p>
				Er zijn verschillende redenen om beschikkingen niet alleen te delen met degene tot wie de
				beschikking is gericht, maar met een ieder. Naming & shaming kan een oogmerk zijn. Een
				andere reden betreft het versterken van de rechtspositie van individuele burgers, omdat zij
				hierdoor kunnen nagaan hoe dezelfde wettelijke voorschriften in soortgelijke gevallen zijn
				toegepast.
			</p>
		</Faq>

		<Faq title="Hoe maak je beschikkingen openbaar?">
			<p>
				Beschikkingen kunnen zowel integraal (al dan niet deels zwartgelakt) worden gepubliceerd als
				in de vorm van overzichten. Deze overzichten bevatten niet de volledige tekst van de
				beschikking, maar enkel de kernelementen hiervan. Door middel van metadata kan het
				selecteren van bepaalde beschikkingen worden vereenvoudigd.
			</p>
		</Faq>

		<Faq title="Wie maakt beschikkingen al openbaar?">
			<p>
				Ga hierboven zelf na welke overheden hun beschikkingen al openbaar maken. Per publicerende
				overheid tref je meer informatie aan over de vindplaats van de beschikkingen, het type
				beschikkingen en de laatste zoekslag.
			</p>
		</Faq>

		<Faq title="Waar maak je beschikkingen openbaar?">
			<p>
				Sommige overheden maken voor openbaarmaking van beschikkingen gebruik van hun eigen website
				(‘bij de bron’) of een eigen portaal. Andere overheden maken gebruik van een centraal
				portaal, zoals <a href="https://open.overheid.nl" target="_blank" class="underline"
					>open.overheid.nl</a
				>, <a href="https://puc.overheid.nl" target="_blank" class="underline">puc.overheid.nl</a>
				en
				<a href="https://officielebekendmakingen.nl" target="_blank" class="underline"
					>officielebekendmakingen.nl</a
				>.
			</p>
		</Faq>
	</section>

	<section class="mx-auto my-32 w-content-md sm:my-36">
		<h2 id="over" class="mb-10 text-center text-2xl font-semibold">Over Beschikkingen in Beeld</h2>

		<p class="mb-6 text-bib-blue">
			Beschikkingen in Beeld is een onderzoeksproject, gefinancierd door de <a
				href="https://www.overinformatiegesproken.nl/"
				target="_blank"
				class="underline">Maatschappelijke Coalitie Over Informatie Gesproken (MCOIG)</a
			>, dat is uitgevoerd door een samenwerkingsverband van
			<a href="https://www.tilburguniversity.edu" target="_blank" class="underline"
				>Tilburg University</a
			>, <a href="https://openstate.eu" target="_blank" class="underline">Open State Foundation</a>
			en <a href="https://www.centerdata.nl" target="_blank" class="underline">Centerdata</a>.
			Beschikkingen in Beeld is onderdeel van het meerjarige onderzoeksproject
			<strong class="font-semibold"
				>Case-Inclusive Transparency for a Digital and Open Government (CITaDOG)</strong
			>, waarbinnen de gevolgen van het proces van openbaarmaking van beschikkingen voor het proces
			van overheidsbesluitvorming worden onderzocht.
		</p>

		<p class="mb-12 text-bib-blue">
			Beschikkingen in Beeld geeft van iedere overheidsorganisatie een momentopname. Mocht uw
			organisatie inmiddels openbaarmaking van beschikkingen verder ter hand hebben genomen en in
			aanmerking komen voor een extra ster (★), laat het ons weten via <a
				href="mailto:citadog@tilburguniversity.edu"
				target="_blank"
				class="text-bib-blue underline">citadog@tilburguniversity.edu</a
			>
			onder vermelding van de vindplaats van de beschikkingen!
		</p>

		<div class="flex flex-wrap justify-center gap-6">
			<a
				href="#"
				class="bg-bib-blue px-6 py-2.5 text-xl font-semibold text-white transition hover:brightness-95"
			>
				Lees het hele rapport
			</a>
			<a
				href="mailto:citadog@tilburguniversity.edu"
				target="_blank"
				class="border border-bib-dark-blue bg-white px-6 py-2.5 text-xl font-semibold text-bib-dark-blue transition hover:brightness-95"
			>
				Neem contact op
			</a>
		</div>
	</section>

	<footer class="mt-36 bg-bib-blue py-12 text-white">
		<div class="mx-auto w-content-md">
			<p class="mb-4 font-medium">
				Beschikkingen in Beeld door
				<a
					href="https://www.tilburguniversity.edu/"
					target="_blank"
					class="font-semibold underline decoration-2"
				>
					Tilburg University
				</a>,
				<a
					href="https://openstate.eu/"
					target="_blank"
					class="font-semibold underline decoration-2"
				>
					Open State Foundation
				</a>
				en
				<a
					href="https://www.centerdata.nl/"
					target="_blank"
					class="font-semibold underline decoration-2"
				>
					Centerdata
				</a>
				is gelicenseerd onder
				<a
					href="https://creativecommons.org/publicdomain/zero/1.0/deed.nl"
					target="_blank"
					class="font-semibold underline decoration-2"
				>
					CC0 1.0
				</a>. Naamsvermelding wordt gewaardeerd.
			</p>
			<p>Laatst bijgewerkt op {new Date().toLocaleDateString('nl-NL', { dateStyle: 'full' })}.</p>
		</div>
	</footer>
</main>
