/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'charcoal': '#1A1A1A',
                'slate-grey': '#2D3748',
                'justice-gold': '#C5A059',
            },
            fontFamily: {
                serif: ['"Cormorant Garamond"', 'serif'],
                sans: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
