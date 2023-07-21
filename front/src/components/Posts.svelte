<script lang="ts">
	import type { IPost } from '../interfaces/Post';
	import Post from './Post.svelte';

	export let posts: IPost[];
</script>

<section class="py-8">
	<a href="/posts">
		<h1 class="text-4xl font-bold mb-8">Posts</h1>
	</a>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		{#each posts as post}
			<Post short {post} />
		{/each}
	</div>
</section>
