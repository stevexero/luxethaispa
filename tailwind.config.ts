import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ffffff',
          dark: '#35543A',
        },
        secondary: {
          DEFAULT: '#ffffff',
          dark: '#2C3B2E',
        },
        textPrimary: {
          DEFAULT: '#877606',
          dark: '#d5a21c',
        },
      },
      fontFamily: {
        lavishly: ['var(--font-lavishly-yours)', 'cursive'],
      },
    },
  },
  plugins: [],
} satisfies Config;
