const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				default: {
					light: colors.slate[100],
					dark: colors.slate[900]
				},
				neutral: {
					light: colors.slate[400],
					dark: colors.slate[500]
				},
				primary: {
					light: colors.indigo[600],
					dark: colors.indigo[800]
				}
			}
		}
	},
	plugins: []
};
