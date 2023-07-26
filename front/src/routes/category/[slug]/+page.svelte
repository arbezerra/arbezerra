<script lang="ts">
	import Posts from '../../../components/Posts.svelte';
	import type { ICategory } from '../../../interfaces/Category';
	import type { IPost } from '../../../interfaces/Post';
	
	export let data;
	const category: ICategory = data.category!;
	const posts: IPost[] = data.posts?.items || [];
</script>

<svelte:head>
	<title>Category: {category.name}</title>
    <meta name="description" content="List of posts by category." />
</svelte:head>

<Posts {posts} {category} />
