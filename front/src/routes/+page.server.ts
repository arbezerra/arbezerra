import type { IPost } from '../interfaces/Post';
import type { IProject } from '../interfaces/Project';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const response = await fetch('http://localhost:8000/post', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const response2 = await fetch('http://localhost:8000/project', {
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
