import { config } from '../../config';
import type { IPost } from '../../interfaces/Post';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const response = await fetch(`${config.apiURL}/post`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const posts: {items: IPost[]} = await response.json();

		return {posts};
	} catch (error) {
		console.error(`Error in load function for /: ${error}`);
	}
};
