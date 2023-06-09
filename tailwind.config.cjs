/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
	theme: {
		extend: {
            colors: {
                CBlue: '#38b6ff',
                CGray: '#282a30',
                CBlack: '#151515',
                CWhite: '#ffffff4d',
                CCool: '#DFE7F2',
            },
            height: {
                "10v": "10vh",
                "20v": "20vh",
                "30v": "30vh",
                "40v": "40vh",
                "50v": "50vh",
                "60v": "60vh",
                "70v": "70vh",
                "80v": "80vh",
                "90v": "90vh",
                "100v": "100vh",
            },
        },
	},
	plugins: [],
}
