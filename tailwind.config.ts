import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          '950': '#000f18',
        },
        sky: {
          '50': '#f0f7fc',
          '100': '#dfeef7',
          '600': '#007bc7', // button color
        },
        yellow: {
          '50': '#fffcf0',
          '400': '#FFC901', // circle color
          '950': '#0f0c00',
        },
        neutral: {
          '500': '#6C6C6C',
        },
        gray: {
          '300': '#dcdcdc',
          '500': '#aeaeae',
          '700': '#1f1f1f',
          '800': '#2b2b2b',
          '900': '#0f0f0f',
        },
        zinc: {
          '900': '#1f1f1f',
        },
      },
      fontFamily: {
        sans: ['var(--font-general-sans), sans-serif'],
      },
      fontSize: {
        '5xl': '2.625rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        custom: '0 9px 14px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
