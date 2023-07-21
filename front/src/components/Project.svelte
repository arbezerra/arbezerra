<script lang="ts">
	import type { IProject } from '../interfaces/Project';
	import Badge from './Badge.svelte';

	export let project: IProject;
</script>

<article class="text-default-light bg-slate-800 rounded shadow-lg p-4">
	<h2 class="text-2xl font-bold mb-2">{project.title}</h2>
	<p class="mb-4">{project.description}</p>
	<div>
		{#each project.tags as tag}
			<Badge text={tag.name} />
		{/each}
	</div>
</article>
