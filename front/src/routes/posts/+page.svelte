<script lang="ts">
	import Posts from '../../components/Posts.svelte';
	import type { IPost } from '../../interfaces/Post';
	
	export let data;
	const posts: IPost[] = data.posts?.items || [];
</script>

<svelte:head>
	<title>Blog</title>
    <meta name="description" content="List of all posts." />
</svelte:head>

<Posts {posts} />
