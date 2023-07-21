<script lang="ts">
	import Post from '../../../components/Post.svelte';
	import type { IPost } from '../../../interfaces/Post';

	export let data;
	const post: IPost = data.post!;
</script>

<Post {post} />
