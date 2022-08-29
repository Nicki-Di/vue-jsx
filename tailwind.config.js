/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#2B2548",
                "primary-1": "#3A3360",
                "secondary": "#77709F",
                "secondary-1": "#473f72",
                "gray": "#B3B3B3",
                "accent": "#6F57E8",
                's-10': '#1A1A1A',
                's-30': '#575757',
                's-60': '#808080',
                's-80': '#E0E0E0',
                's-90': '#F5F5F5',
                's-100': '#FCFCFC',
                'alert': "#ff4c41",
                'success': "#68cf29"
            }
        },
    },
    plugins: [],
}