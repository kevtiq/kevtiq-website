<script context="module">
	import Crinkle from '$lib/components/Crinkle.svelte';

	export async function load({ fetch }) {
		const res = await fetch('/index.json');
		return { props: { articles: await res.json() } };
	}
</script>

<script>
	import Logo from '$lib/components/Logo.svelte';
	import Card from '$lib/components/Card.svelte';
	import Page from '$lib/components/Page.svelte';

	export let articles;
</script>

<svelte:head>
	<title>Kevin Pennekamp</title>
</svelte:head>

<Page width="5" showHeader={false} class="center-layout flow flow-g-3 mt-1">
	<section class="splitter splitter-w-1 mt-1 splitter-g-3 mb-1">
		<div class="flow flex-col">
			<Logo class="self-start" />
			<h1 class="px-0">Hi, I'm Kevin.</h1>
			<span class="px-0 text-00 text-gray-200">
				<Crinkle /> I'm a Software Engineer working at
				<a href="https://finaps.nl" title="Website of Finaps B.V."> Finaps</a>, where I mostly do
				front-end and lead a small team. I am a big <i>front-end</i> and <i>CSS</i> nerd, and love
				to try new things on this personal playgroud. I occasionally
				<a class="next" href="/writing">write</a> about my front-end journeys and opinions.
			</span>

			<i class="flow-t-3 px-0 text-00 text-gray-300 text-center">
				"A crinkle (/ˈkrɪŋk(ə)l/) is a wrinkle or crease on a surface. It highlights personality and
				uniqueness."
			</i>
		</div>
		<aside class="flex-col flow">
			{#each articles as article}
				<Card
					date={article.date}
					class="bg-gray-400 p-1"
					title={article.title}
					description={article.description}
					href="/writing/{article.slug}"
				/>
			{/each}
			<a href="/writing" class="self-end mt-1 text-0 bold" sveltekit:prefetch
				>View more articles →</a
			>
		</aside>
	</section>
</Page>
<!-- Hacker div for the pancake class -->
<div />