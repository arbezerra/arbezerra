<script lang="ts">
	import type { IProject } from '../interfaces/Project';
	import Badge from './Badge.svelte';

	export let project: IProject;
</script>

<article>
	<h2 class="text-2xl font-bold mb-2">{project.title}</h2>
	<p class="mb-4">{project.description}</p>
	<div>
		{#each project.tags as tag}
			<Badge text={tag.name} />
		{/each}
	</div>
</article>
