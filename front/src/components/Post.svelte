<script lang="ts">
	import type { IPost } from '../interfaces/Post';
	import Badge from './Badge.svelte';

	export let post: IPost;
	export let short: boolean = false;
</script>

<article>
	<div>
		<small class="text-xs mr-2">{post.date.toLocaleString()}</small>
		<a href="/category/{post.category.slug}"><Badge text={post.category.name} /></a>
	</div>
	<a href="/post/{post.slug}">
		<h1 class="{short ? 'text-2xl' : 'text-4xl'} font-bold mb-2">{post.title}</h1>
		{short ? post.summary : post.content}
	</a>
</article>
