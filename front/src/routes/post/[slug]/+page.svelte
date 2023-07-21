<script lang="ts">
	import Post from '../../../components/Post.svelte';
	import type { IPost } from '../../../interfaces/Post';

	const post: IPost = {
		id: '1',
		slug: 'hello-world',
		title: 'First Post',
		content: 'Hello world!',
		summary: 'Summary',
		date: new Date(),
			category: {
				id: '1',
				name: 'Teste',
				slug: 'test'
			}
	};
</script>

<Post {post} />
