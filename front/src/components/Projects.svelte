<script lang="ts">
	import type { IProject } from "../interfaces/Project";
	import Project from "./Project.svelte";

	const projects: IProject[] = [{ id: '1', title: 'Title', description: "Description" }];
</script>

<section class="py-8">
	<h1 class="text-4xl font-bold mb-8">Projects</h1>
	{#each projects as project}
		<Project {project} />
	{/each}
</section>
