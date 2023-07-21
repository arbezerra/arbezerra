<script lang="ts">
	import Hero from '../components/Hero.svelte';
	import Posts from '../components/Posts.svelte';
	import Projects from '../components/Projects.svelte';
	import type { IPost } from '../interfaces/Post';
	import type { IProject } from '../interfaces/Project';

	export let data;
	const posts: IPost[] = data.posts?.items || [];
	const projects: IProject[] = data.projects?.items || [];
</script>

<Hero />
<Projects {projects} />
<Posts {posts} />
