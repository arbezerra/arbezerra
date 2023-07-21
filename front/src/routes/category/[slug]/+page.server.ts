import type { ICategory } from '../../../interfaces/Category';
import type { IPost } from '../../../interfaces/Post';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const response = await fetch(`http://localhost:8000/post/category/${params.slug}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const response2 = await fetch(`http://localhost:8000/category/slug/${params.slug}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const posts: { items: IPost[] } = await response.json();
		const category: ICategory = await response2.json();

		return { posts, category };
	} catch (error) {
		console.error(`Error in load function for /: ${error}`);
	}
};
