import { config } from '../config';
import type { IPost } from '../interfaces/Post';
import type { IProject } from '../interfaces/Project';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const response = await fetch(`${config.apiURL}/post`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const response2 = await fetch(`${config.apiURL}/project`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const posts: {items: IPost[]} = await response.json();
		const projects: {items: IProject[]} = await response2.json();

		return {posts, projects};
	} catch (error) {
		console.error(`Error in load function for /: ${error}`);
	}
};
