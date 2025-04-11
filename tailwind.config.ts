/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
const { fontFamily } = require('tailwindcss/defaultTheme');

const config = {
  darkMode: ['class', '.dark'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        //
        'green-500': '#24AE7C',
        'green-600': '#0D2A1F',
        'blue-500': '#79B5EC',
        'blue-600': '#152432',
        'red-500': '#F37877',
        'red-600': '#3E1716',
        'red-700': '#F24E43',
        'light-200': '#E8E9E9',
        'dark-200': '#0D0F10',
        'dark-300': '#131619',
        'dark-400': '#1A1D21',
        'dark-500': '#363A3D',
        'dark-600': '#76828D',
        'dark-700': '#ABB8C4',
        'dark-800': '#111111',
        'dark-900': '#000000',
      },
    },
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
    },
    backgroundImage: {
      appointments: "url('/assets/images/appointments-bg.png')",
      pending: "url('/assets/images/pending-bg.png')",
      cancelled: "url('/assets/images/cancelled-bg.png')",
      'light-rays': "url('/assets/images/appointments-bg.png')",
    },
    keyframes: {
      'accordion-down': {
        from: {
          height: '0',
        },
        to: {
          height: 'var(--radix-accordion-content-height)',
        },
      },
      'accordion-up': {
        from: {
          height: 'var(--radix-accordion-content-height)',
        },
        to: {
          height: '0',
        },
      },
      'caret-blink': {
        '0%,70%,100%': {
          opacity: '1',
        },
        '20%,50%': {
          opacity: '0',
        },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
      'caret-blink': 'caret-blink 1.25s ease-out infinite',
    },
  },

  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addBase, addUtilities, addComponents, matchUtilities }) {
      // Add custom utilities
      addUtilities({
        '.custom-scrollbar::-webkit-scrollbar': {
          width: '0px',
          height: '0px',
          borderRadius: '0px',
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          background: 'transparent',
          borderRadius: '0px',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb:hover': {
          background: 'transparent',
        },
        // Custom classes from globals.css that were causing errors
        '.bg-dark-800': {
          backgroundColor: '#111111',
        },
        '.bg-dark-900': {
          backgroundColor: '#000000',
        },
        '.bg-light-rays': {
          backgroundImage: "url('/assets/images/appointments-bg.png')",
        },
        '.size-full': {
          width: '100%',
          height: '100%',
        },
        '.size-16': {
          width: '4rem',
          height: '4rem',
        },
        '.text-36-bold': {
          fontSize: '36px',
          lineHeight: '40px',
          fontWeight: '700',
        },
        '.text-32-bold': {
          fontSize: '32px',
          lineHeight: '36px',
          fontWeight: '700',
        },
        '.text-24-bold': {
          fontSize: '24px',
          lineHeight: '28px',
          fontWeight: '700',
        },
        '.text-18-bold': {
          fontSize: '18px',
          lineHeight: '24px',
          fontWeight: '700',
        },
        '.text-16-semibold': {
          fontSize: '16px',
          lineHeight: '20px',
          fontWeight: '600',
        },
        '.text-16-regular': {
          fontSize: '16px',
          lineHeight: '20px',
          fontWeight: '400',
        },
        '.text-14-medium': {
          fontSize: '14px',
          lineHeight: '18px',
          fontWeight: '500',
        },
        '.text-14-regular': {
          fontSize: '14px',
          lineHeight: '18px',
          fontWeight: '400',
        },
        '.text-12-regular': {
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: '400',
        },
        '.text-12-semibold': {
          fontSize: '12px',
          lineHeight: '16px',
          fontWeight: '600',
        },
      });
    }),
  ],
} satisfies Config;

export default config;
