<script lang="ts">
	import type { IPost } from '../interfaces/Post';
	import Badge from './Badge.svelte';

	export let post: IPost;
	export let short: boolean = false;
</script>

<article>
	<div>
		<small class="text-xs mr-2">{post.date.toLocaleString()}</small>
		<a href="/category/{post.category_slug}"><Badge text={post.category} /></a>
	</div>
	<a href="/post/{post.slug}" class="mb-4">
		<h1 class="{short ? 'text-2xl' : 'text-4xl'} font-bold mb-2">{post.title}</h1>
	</a>
    <div class="prose dark:prose-invert">
        {@html short ? post.summary : post.content}
    </div>
</article>
