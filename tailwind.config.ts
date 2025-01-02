import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#000f18',
        },
        sky: {
          100: '#dfeef7',
          50: '#f0f7fc'
        },
        yellow: {
          50: '#fffcf0',
          950: '#0f0c00',
        },
        neutral: {
          500: '#6C6C6C',
        },
        gray: {
          800: '#1f1f1f',
        },
        zinc: {
          900: '#1f1f1f',
        },
      },
      fontFamily: {
        sans: ['var(--font-general-sans), sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
