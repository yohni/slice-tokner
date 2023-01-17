/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#ED374D',
				secondary: '#FA793F',
				tersier: '#F7F651',
				base1: '#191B21'
			},
			backgroundImage: {
				waves: "url('/waves.webp')",
				waves1: "url('/wave1.webp')",
				waves2: "url('/wave2.webp')"
			}
		}
	},
	plugins: []
};
