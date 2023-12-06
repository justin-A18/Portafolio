/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}', './index.html'],
	theme: {
		extend: {
			backgroundImage: {
				"hero": "url('https://github.com/justin-A18/Portafolio/blob/main/public/hero-img.jpg')",
			},
		},
	},
	plugins: [],
};
