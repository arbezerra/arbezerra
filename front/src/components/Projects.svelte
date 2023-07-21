<script lang="ts">
	import { page } from '$app/stores';
	import type { IProject } from '../interfaces/Project';
	import Badge from './Badge.svelte';
	import Project from './Project.svelte';

	export let projects: IProject[];
</script>

<section class="py-8">
	<h1 class="text-4xl font-bold mb-8">Projects</h1>
	<div class="grid grid-cols-3 gap-4">
		{#each projects as project}
			<a href={project.href}><Project {project} /></a>
		{/each}
	</div>
</section>
