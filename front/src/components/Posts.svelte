<script lang="ts">
	import type { ICategory } from '../interfaces/Category';
	import type { IPost } from '../interfaces/Post';
	import Post from './Post.svelte';

	export let category: ICategory | undefined = undefined;
	export let posts: IPost[];
</script>

<section class="py-8">
	<a href="/posts">
		<h1 class="text-4xl font-bold mb-8">
			{#if category}
				Category: {category.name}
			{:else}
				Posts
			{/if}
		</h1>
	</a>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		{#each posts as post}
			<Post short {post} />
		{/each}
	</div>
</section>
