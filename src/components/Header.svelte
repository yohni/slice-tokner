<script>
	import { page } from '$app/stores';
	import Logo from './icons/Logo.svelte';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import clsx from 'clsx';

	let open = false;

	const toggle = () => (open = !open);
</script>

<header class="fixed top-0 w-full bg-[#F7F5F9]">
	{#if open}
		<nav
			transition:fly={{ y: -200, duration: 250 }}
			class="absolute h-screen inset-0 bg-white flex items-center justify-center"
		>
			<ul class="flex flex-col gap-y-4">
				<li
					transition:fly={{ y: -10, duration: 250, delay: 250 }}
					aria-current={$page.url.pathname === '/' ? 'page' : undefined}
					class={clsx({
						'text-primary': $page.url.pathname === '/'
					})}
				>
					<a class="text-lg" href="/">Home</a>
				</li>
				<li
					transition:fly={{ y: -10, duration: 250, delay: 300 }}
					aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
					class={clsx({
						'text-primary': $page.url.pathname === '/about'
					})}
				>
					<a class="text-lg" href="/about">About</a>
				</li>
				<li
					transition:fly={{ y: -10, duration: 250, delay: 350 }}
					aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}
					class={clsx({
						'text-primary': $page.url.pathname === '/sverdle'
					})}
				>
					<a class="text-lg" href="/sverdle">Sverdle</a>
				</li>
			</ul>
		</nav>
	{/if}

	<div class="container bg-white py-4 relative flex justify-between">
		<a class="w-1/3 block" href="/">
			<Logo />
		</a>

		<button class="w-8 h-8 flex justify-center items-center" on:click={toggle}>
			{#if !open}
				<Icon class="w-6 h-6" icon="system-uicons:menu-hamburger" />
			{:else}
				<Icon class="w-8 h-8" icon="system-uicons:close" />
			{/if}
		</button>
	</div>
</header>
