import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'blackBg': '#121212',
			'dirtyWhite': '#f5f5f5',
			'lightGray': '#A6A6A6',
			'darkGray': '#3D3D3D',
		},
		extend: {
			fontFamily: {
				firacode: ['Fira Code Variable', ...defaultTheme.fontFamily.sans],
				opensans: ['Open Sans Variable', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
