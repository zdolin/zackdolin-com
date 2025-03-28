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
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ellipsis: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        float: 'float 1.6s ease-in-out infinite',
        ellipsis: 'ellipsis 0.9s ease-in-out infinite',
      },
      colors: {
        surface: {
          primary: 'var(--surface-primary)',
          secondary: 'var(--surface-secondary)',
          tertiary: 'var(--surface-tertiary)',
          quaternary: 'var(--surface-quaternary)',
          highlight: 'var(--surface-highlight)',
          accent: 'var(--surface-accent)',
          muted: 'var(--surface-muted)',
        },
        border: {
          primary: 'var(--border-primary)',
          muted: 'var(--border-muted)',
        },
        button: {
          default: 'var(--button-default)',
          hover: 'var(--button-hover)',
          active: 'var(--button-active)',
          icon: 'var(--button-icon)',
        },
        icon: {
          button: {
            default: 'var(--icon-button-default)',
            hover: 'var(--icon-button-hover)',
          },
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          input: 'var(--text-input)',
          accent: 'var(--text-accent)',
        },
        card: {
          default: 'var(--card-default)',
          hover: 'var(--card-hover)',
          testimonial: 'var(--card-testimonial)',
        },
        hero: {
          primary: 'var(--hero-primary)',
          secondary: 'var(--hero-secondary)',
          border: 'var(--hero-border)',
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
      transitionDuration: {
        '400': '400ms',
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
