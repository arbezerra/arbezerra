<script lang="ts">
	import Hero from '../components/Hero.svelte';
	import Posts from '../components/Posts.svelte';
	import Projects from '../components/Projects.svelte';
	import type { IPost } from '../interfaces/Post';
	import type { IProject } from '../interfaces/Project';

	export let data;
	const posts: IPost[] = data.posts?.items || [];
	const projects: IProject[] = data.projects?.items || [];
	const description =
		'Full Stack TypeScript Developer with 10+ years of experience building websites and web applications. I have recently focused on working with statically generated frameworks like Next.js and have experience with React/Native and Angular for Frontend; and Express.js, Laravel and Flask for Backend.';
</script>

<svelte:head>
	<title>André Landim</title>
	<meta name="description" content={description} />
</svelte:head>

<Hero {description} />
<Projects {projects} />
<Posts {posts} />
