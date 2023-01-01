<script>
	import Hero from '../views/Hero.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="overflow-hidden">
	<div
		class="hidden lg:block bg-waves absolute top-0 inset-x-0 h-[160vh] 2xl:h-[200vh] bg-contain bg-no-repeat bg-right-top -z-20"
	/>
	<Hero />
</div>
