<script lang="ts">
	import Posts from '../../../components/Posts.svelte';
	import type { ICategory } from '../../../interfaces/Category';
	import type { IPost } from '../../../interfaces/Post';
	
	export let data;
	const category: ICategory = data.category!;
	const posts: IPost[] = data.posts?.items || [];
</script>

<Posts {posts} {category} />
