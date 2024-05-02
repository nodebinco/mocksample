/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			colors: {
				brand: '#FD4F00'
			},
			fontSize: {
				xs: '.875rem',
				sm: '1rem',
				tiny: '1rem',
				base: '1.125rem',
				lg: '1.125rem',
				xl: '1.5rem',
				'2xl': '1.875rem',
				'3xl': '2.25rem',
				'4xl': '3rem',
				'5xl': '4rem',
				'6xl': '5rem'
			},
			fontFamily: {
				NotoSans: ['Noto Sans', 'sans-serif']
			}
		}
	},
	daisyui: {
		themes: ['light']
	},
	plugins: [require('daisyui')]
};
