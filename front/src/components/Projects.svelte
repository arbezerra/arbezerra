<script lang="ts">
	import type { IProject } from '../interfaces/Project';
	import Project from './Project.svelte';

	export let projects: IProject[];
</script>

<section class="py-8">
	<h1 class="text-4xl font-bold mb-8">Projects</h1>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		{#each projects as project}
			<a class="text-default-light bg-slate-800 rounded shadow-lg p-4" href={project.href}><Project {project} /></a>
		{/each}
	</div>
</section>
