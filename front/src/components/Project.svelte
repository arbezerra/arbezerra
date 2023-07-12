<script lang="ts">
	import type { IProject } from "../interfaces/Project";

	export let project: IProject;
</script>

<h2>{project.title}</h2>
<p>{project.description}</p>
