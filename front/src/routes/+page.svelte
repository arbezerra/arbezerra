<script lang="ts">
	import Hero from '../components/Hero.svelte';
	import Posts from '../components/Posts.svelte';
	import Projects from '../components/Projects.svelte';
	import type { IPost } from '../interfaces/Post';

	const posts: IPost[] = [
		{ id: '1', title: 'First Post', content: 'Hello world!', date: '2023-07-11' }
	];
</script>

<main class="container mx-auto">
	<Hero />
	<Projects />
	<Posts {posts} />
</main>
