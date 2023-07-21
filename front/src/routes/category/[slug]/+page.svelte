<script lang="ts">
	import Posts from '../../../components/Posts.svelte';
	import type { ICategory } from '../../../interfaces/Category';
	import type { IPost } from '../../../interfaces/Post';
	const category: ICategory = {
		id: "1",
		slug: "test",
		name: "Test"
	}
	const posts: IPost[] = [
		{
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
		},
		{
			id: '2',
			slug: 'hello-world2',
			title: 'Second Post',
			content: 'Hello world 2!',
			summary: 'Summary 2',
			date: new Date(),
			category: {
				id: '1',
				name: 'Teste',
				slug: 'test'
			}
		}
	];
</script>

<Posts {posts} {category} />
