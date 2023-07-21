import type { IPost } from '../../../interfaces/Post';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params}) => {
	try {
		const response = await fetch(`http://localhost:8000/post/slug/${params.slug}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const post: IPost = await response.json();

		return {post};
	} catch (error) {
		console.error(`Error in load function for /: ${error}`);
	}
};
