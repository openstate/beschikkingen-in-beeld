<script lang="ts">
	import Case from '$lib/components/case.svelte';
	import Faq from '$lib/components/faq.svelte';
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

		<div class="mx-auto max-w-164 px-12 py-40 text-center text-balance text-white">
			<h1 class="mb-10 font-serif text-4xl font-bold md:text-5xl">Beschikkingen in Beeld</h1>
			<p class="mb-10 text-xl">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet nec tellus ac
				sodales. Aliquam ut commodo mi curabitur nec ipsum.
			</p>

			<div class="flex justify-center gap-6">
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
			</div>
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

	<section class="mx-auto my-36 w-content-md">
		<h2 id="wie" class="mb-10 text-center text-2xl font-semibold">Wie publiceert beschikkingen?</h2>

		<p class="mb-20 text-center text-lg text-balance text-bib-blue">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet nec tellus ac sodales.
			Aliquam ut commodo mi curabitur nec ipsum.
		</p>

		<h3 class="mb-10 text-center text-xl font-semibold">Lokale overheden</h3>

		<div class="mb-20 aspect-square border border-bib-dark-blue"></div>

		<h3 class="mb-10 text-center text-xl font-semibold">Nationale overheden</h3>

		<div class="mb-20 aspect-square border border-bib-dark-blue"></div>
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

	<section class="mx-auto my-36 w-content-md">
		<h2 id="hoe" class="mb-10 text-center text-2xl font-semibold">
			Hoe publiceer je beschikkingen?
		</h2>

		<p class="mb-20 text-center text-lg text-balance text-bib-blue">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet nec tellus ac sodales.
			Aliquam ut commodo mi curabitur nec ipsum.
		</p>

		<div class="space-y-10">
			<Star level={1} title="Lorem ipsum dolor sit amet consectetur">
				<p>
					Ut commodo nisl auctor ultricies sollicitudin. Sed ac est odio. Etiam id mi in felis
					sodales vehicula eu ac arcu. Ut risus orci, vehicula eget dignissim ut, condimentum in
					orci.
				</p>
			</Star>

			<Star level={2} title="Lorem ipsum dolor sit amet consectetur">
				<p>
					Ut commodo nisl auctor ultricies sollicitudin. Sed ac est odio. Etiam id mi in felis
					sodales vehicula eu ac arcu. Ut risus orci, vehicula eget dignissim ut, condimentum in
					orci.
				</p>
			</Star>

			<Star level={3} title="Lorem ipsum dolor sit amet consectetur">
				<p>
					Ut commodo nisl auctor ultricies sollicitudin. Sed ac est odio. Etiam id mi in felis
					sodales vehicula eu ac arcu. Ut risus orci, vehicula eget dignissim ut, condimentum in
					orci.
				</p>
			</Star>

			<Star level={4} title="Lorem ipsum dolor sit amet consectetur">
				<p>
					Ut commodo nisl auctor ultricies sollicitudin. Sed ac est odio. Etiam id mi in felis
					sodales vehicula eu ac arcu. Ut risus orci, vehicula eget dignissim ut, condimentum in
					orci.
				</p>
			</Star>

			<Star level={5} title="Lorem ipsum dolor sit amet consectetur">
				<p>
					Ut commodo nisl auctor ultricies sollicitudin. Sed ac est odio. Etiam id mi in felis
					sodales vehicula eu ac arcu. Ut risus orci, vehicula eget dignissim ut, condimentum in
					orci.
				</p>
			</Star>
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

	<section class="mx-auto my-36 w-content-md">
		<h2 id="wat" class="mb-10 text-center text-2xl font-semibold">Wat zijn beschikkingen?</h2>

		<p class="mb-20 text-center text-lg text-balance text-bib-blue">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet nec tellus ac sodales.
			Aliquam ut commodo mi curabitur nec ipsum.
		</p>

		<Faq title="Lorem ipsum dolor sit amet consectetur?" open>
			<p>
				Ut commodo nisl auctor ultricies sollicitudin. Sed ac est odio. Etiam id mi in felis sodales
				vehicula eu ac arcu. Ut risus orci, vehicula eget dignissim ut, condimentum in orci.
			</p>
		</Faq>

		<Faq title="Lorem ipsum dolor sit amet consectetur?">
			<p>
				Ut commodo nisl auctor ultricies sollicitudin. Sed ac est odio. Etiam id mi in felis sodales
				vehicula eu ac arcu. Ut risus orci, vehicula eget dignissim ut, condimentum in orci.
			</p>
		</Faq>

		<Faq title="Lorem ipsum dolor sit amet consectetur?">
			<p>
				Ut commodo nisl auctor ultricies sollicitudin. Sed ac est odio. Etiam id mi in felis sodales
				vehicula eu ac arcu. Ut risus orci, vehicula eget dignissim ut, condimentum in orci.
			</p>
		</Faq>

		<Faq title="Lorem ipsum dolor sit amet consectetur?">
			<p>
				Ut commodo nisl auctor ultricies sollicitudin. Sed ac est odio. Etiam id mi in felis sodales
				vehicula eu ac arcu. Ut risus orci, vehicula eget dignissim ut, condimentum in orci.
			</p>
		</Faq>
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

	<section class="mx-auto my-36 w-content-md">
		<h2 id="over" class="mb-10 text-center text-2xl font-semibold">Over Beschikkingen in Beeld</h2>

		<p class="mb-10 text-center text-lg text-balance text-bib-blue">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend volutpat augue, in
			euismod nisi egestas et. Sed accumsan eu ligula vitae feugiat. Sed at mauris euismod, vehicula
			sapien quis, sollicitudin ipsum. Maecenas eu porta magna. Aenean suscipit, tortor ac venenatis
			convallis, felis ipsum malesuada leo, eu cursus orci lacus vel ex.
		</p>

		<div class="flex flex-wrap justify-center gap-6">
			<a
				href="#wie"
				class="bg-bib-blue px-6 py-2.5 text-xl font-semibold text-white transition hover:brightness-95"
			>
				Lees het hele rapport
			</a>
			<a
				href="#wat"
				class="border border-bib-dark-blue bg-white px-6 py-2.5 text-xl font-semibold text-bib-dark-blue transition hover:brightness-95"
			>
				Neem contact op
			</a>
		</div>
	</section>

	<footer class="mt-36 bg-bib-blue py-12 text-white">
		<div class="mx-auto w-content-md">
			<p class="font-medium">
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
		</div>
	</footer>
</main>
