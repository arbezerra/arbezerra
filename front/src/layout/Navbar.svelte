<script lang="ts">
    import Icon from '@iconify/svelte';
	let opened = false;
	const routes = [{ path: '/posts', title: 'Blog' }];
    const socials = [
        { href: "https://github.com/arbezerra", icon: "mdi:github"},
        { href: "https://www.linkedin.com/in/arbezerra/", icon: "mdi:linkedin"},
    ];
</script>

<nav class="text-default-light bg-slate-800 w-full top-0 z-20">
	<div class="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex">
		<div class="flex items-center justify-between py-3 lg:py-4">
			<a href="/"> André Landim </a>
            <div class="flex items-center justify-center gap-4 ml-4">
                {#each socials as social}
                    <a href={social.href} target="_blank">
                        <Icon icon={social.icon} />
                    </a>
                {/each}
            </div>
			<div class="lg:hidden">
				<button
					class="outline-none p-2 rounded-md focus:border-default-light focus:border"
					aria-label="Menu"
					on:click={() => (opened = !opened)}
				>
					{#if opened}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width={2}
								d="M4 8h16M4 16h16"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>
		<div
			class={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
				opened ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'
			}`}
		>
			<div>
				<ul class="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
					{#each routes as route}
						<li class="mt-8 mb-8 lg:mt-0 lg:mb-0">
							<a href={route.path} class="hover:text-primary-light">
								{route.title}
							</a>
						</li>
					{/each}
					<li class="mt-4 lg:mt-0">
						<a
							href="/login"
							class="py-3 px-4 text-center border bg-primary-light hover:bg-primary-dark rounded-md block lg:inline lg:border-0"
						>
							Login
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</nav>
