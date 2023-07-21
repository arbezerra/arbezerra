<script lang="ts">
	import Hero from '../components/Hero.svelte';
	import Posts from '../components/Posts.svelte';
	import Projects from '../components/Projects.svelte';
	import type { IPost } from '../interfaces/Post';
	import type { IProject } from '../interfaces/Project';

	const posts: IPost[] = [
		{ id: '1', title: 'First Post', content: 'Hello world!', date: '2023-07-11' }
	];

	const projects: IProject[] = [
		{
			id: '1',
			title: 'Title',
			description: 'Description',
			href: '/',
			tags: [
				{ id: '1', name: 'Teste', slug: 'test' },
				{ id: '2', name: 'Teste 2', slug: 'test2' }
			]
		},
		{
			id: '2',
			title: 'Title',
			description: 'Description',
			href: '/',
			tags: [{ id: '1', name: 'Teste', slug: 'test' }]
		}
	];
</script>

<main class="container mx-auto">
	<Hero />
	<Projects {projects} />
	<Posts {posts} />
</main>
