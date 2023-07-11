<script lang="ts">
	import type { IPost } from '../interfaces/Post';
	import Post from './blog/Post.svelte';

	export let posts: IPost[];
</script>

<section>
	{#each posts as post, i}
		<Post post={post} />
	{/each}
</section>
