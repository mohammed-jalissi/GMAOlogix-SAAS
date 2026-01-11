/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#00A896',
                    light: '#2DD4BF', // Teal-400 equivalent
                    dark: '#00897B',  // Teal-700 equivalent
                },
                secondary: {
                    DEFAULT: '#F59E0B', // Amber-500
                },
                dark: {
                    DEFAULT: '#0F172A', // Slate-900
                    lighter: '#1E293B', // Slate-800
                }
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-soft': 'pulse-soft 2s infinite',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-soft': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                }
            }
        },
    },
    plugins: [],
}
