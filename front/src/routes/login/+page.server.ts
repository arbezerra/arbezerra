import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, cookies}) => {
		const data = await request.formData();

		if (!data.get("email") || !data.get("password")) {
			return { missing: true, email: data.get('email') };
		}

		const response = await fetch(`http://localhost:8000/auth`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: data.get('email'),
				password: data.get('password')
			})
		});

		if (response.status === 422) {
			return { invalid: true, email: data.get('email') };
		}

		const token = await response.json();
		
		cookies.set("token", token.token);

		throw redirect(303, "/admin");
	}
};
