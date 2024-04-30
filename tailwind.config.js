/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			colors: {
				brand: '#FD4F00'
			},
			fontFamily: {
				NotoSans: ['Noto Sans', 'sans-serif']
			}
		}
	},
	plugins: [require('daisyui')]
};
