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
        surface: {
          primary: 'var(--surface-primary)',
          secondary: 'var(--surface-secondary)',
          tertiary: 'var(--surface-tertiary)',
          quaternary: 'var(--surface-quaternary)',
          highlight: 'var(--surface-highlight)',
          accent: 'var(--surface-accent)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        hero: {
          circle: 'var(--hero-circle)',
          'circle-dark': 'var(--hero-circle-dark)',
        },
        blue: {
          '950': '#02111A',
          '900': '#222e35',
        },
        sky: {
          '50': '#f0f7fc',
          '100': '#dfeef7',
          '600': '#007bc7', // button color
        },
        yellow: {
          '50': '#fffcf0',
          '300': '#FFE47D', // hero circle color
          '400': '#FFC901', // circle color
          '800': '#826700', // hero circle color dark
          '950': '#1a1605',
        },
        neutral: {
          '500': '#6C6C6C',
        },
        gray: {
          '200': '#ededed',
          '300': '#dcdcdc',
          '500': '#aeaeae',
          '700': '#1f1f1f',
          '800': '#2b2b2b',
          '900': '#101010',
        },
        zinc: {
          '900': '#1f1f1f',
        },
      },
      fontFamily: {
        sans: ['var(--font-general-sans), sans-serif'],
      },
      fontSize: {
        'sm': ['0.938rem', '1.438em'],
        '5xl': '2.625rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        custom: '0 9px 14px rgba(0, 0, 0, 0.03)',
        'custom-2': '0 0 16px 8px rgba(0, 0, 0, 0.03)',
      },
      transitionTimingFunction: {
        'in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
        'out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        'in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        'out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        'in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
        'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        'in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
        'in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        'out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
        'in-back': 'cubic-bezier(0.36, 0, 0.66, -0.56)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'in-out-back': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
