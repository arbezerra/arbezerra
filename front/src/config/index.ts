import { env } from '$env/dynamic/private';

export const config = {
	apiURL: env.API_URL || 'http://127.0.0.1'
};
