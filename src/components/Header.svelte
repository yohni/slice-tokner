<script>
	import { page } from '$app/stores';
	import Logo from './icons/Logo.svelte';
	import Icon from '@iconify/svelte';
	import { fly, scale } from 'svelte/transition';
	import clsx from 'clsx';

	let open = false;

	const toggle = () => (open = !open);
</script>

<header class="fixed lg:relative top-0 w-full bg-[#F7F5F9] lg:bg-opacity-0 z-50">
	{#if open}
		<nav
			transition:fly={{ y: -200, duration: 250 }}
			class="absolute h-screen inset-0 bg-[#F7F5F9] flex items-center justify-items-stretch justify-center"
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
					aria-current={$page.url.pathname === '/' ? 'page' : undefined}
				>
					<a class="text-lg" href="/">Our team</a>
				</li>
				<li
					transition:fly={{ y: -10, duration: 250, delay: 350 }}
					aria-current={$page.url.pathname.startsWith('/') ? 'page' : undefined}
				>
					<a class="text-lg" href="/">Tokens</a>
				</li>
				<li
					transition:fly={{ y: -10, duration: 250, delay: 350 }}
					aria-current={$page.url.pathname.startsWith('/') ? 'page' : undefined}
				>
					<a class="text-lg" href="/">Connect wallet</a>
				</li>
				<li
					transition:fly={{ y: -10, duration: 250, delay: 350 }}
					aria-current={$page.url.pathname.startsWith('/') ? 'page' : undefined}
				>
					<a class="text-lg" href="/">Lightpaper</a>
				</li>
			</ul>
			<div class="absolute bottom-0 w-full flex flex-col p-4 gap-4">
				<button
					transition:scale={{ duration: 250, delay: 300 }}
					class="text-primary hover:text-secondary text-sm p-3"
				>
					Sign In
				</button>
				<button
					transition:scale={{ duration: 250, delay: 300 }}
					class={clsx(
						'bg-gradient-to-r from-primary to-secondary hover:to-primary',
						'p-3 text-sm text-white rounded-full'
					)}
				>
					Sign Up
				</button>
			</div>
		</nav>
	{/if}

	<div
		class="container bg-[#F7F5F9] lg:bg-opacity-0 py-4 relative flex justify-between lg:items-center"
	>
		<a class="w-24 md:w-32 block" href="/">
			<Logo />
		</a>

		<nav class="lg:flex items-center gap-x-24 hidden">
			<ul class="flex flex-row gap-x-4">
				<li
					transition:fly={{ y: -10, duration: 250, delay: 300 }}
					aria-current={$page.url.pathname === '/' ? 'page' : undefined}
				>
					<a class="text-sm uppercase font-bold text-white" href="/">Our team</a>
				</li>
				<li
					transition:fly={{ y: -10, duration: 250, delay: 350 }}
					aria-current={$page.url.pathname.startsWith('/') ? 'page' : undefined}
				>
					<a class="text-sm uppercase font-bold text-white" href="/">Tokens</a>
				</li>
				<li
					transition:fly={{ y: -10, duration: 250, delay: 350 }}
					aria-current={$page.url.pathname.startsWith('/') ? 'page' : undefined}
				>
					<a class="text-sm uppercase font-bold text-white" href="/">Connect wallet</a>
				</li>
				<li
					transition:fly={{ y: -10, duration: 250, delay: 350 }}
					aria-current={$page.url.pathname.startsWith('/') ? 'page' : undefined}
				>
					<a class="text-sm uppercase font-bold text-white" href="/">Lightpaper</a>
				</li>
			</ul>
			<div class="flex gap-4">
				<button
					transition:scale={{ duration: 250, delay: 300 }}
					class="text-white text-sm py-3 underline uppercase font-bold"
				>
					Sign In
				</button>
				<button
					class={clsx(
						'bg-white hover:bg-black hover:text-white',
						'py-3 px-8 text-sm rounded-full font-bold'
					)}
				>
					Sign Up
				</button>
			</div>
		</nav>

		<button class="w-8 h-8 flex justify-center items-center lg:hidden" on:click={toggle}>
			{#if !open}
				<Icon class="w-6 h-6" icon="system-uicons:menu-hamburger" />
			{:else}
				<Icon class="w-8 h-8" icon="system-uicons:close" />
			{/if}
		</button>
	</div>
</header>
