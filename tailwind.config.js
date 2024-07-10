/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary: '#f2a922',
				secondary: '#6ac4d9',
				accent: '#f29188',
				background: '#f2f2f2',
				text: '#6b5873',
			},
		},
	},
	// 	plugins: [require('daisyui')],
	// 	daisyui: {
	// 		themes: ['light', 'dark', 'cupcake', 'cyperpunl'],
	// 	},
}
