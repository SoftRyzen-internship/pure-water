/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  mode: 'JIT',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2.25rem',
          xl: '1.875rem',
        },
      },

      colors: {
        accent: '#1F9FD5',
        accent2: '#1D9ED3',
        secondary: '#1FB0E2',
        mainText: '#274B77',
        lighterBlue: '#20B1E2',
        lightBlue: '#1875B3',
        blue: '#1674B1',
        darkBlue: '#105699',
        darkerBlue: '#0E5497',
        white: '#FFFFFF',
        pink: '#FF7777',
      },

      fontFamily: {
        axiforma: ['var(--font-axiforma)', ...fontFamily.serif],
      },

      fontSize: {
        // little: ['12px', '24px'], // class="text-little"
        // small: ['18px', '24px'], // class="text-small"
      },

      content: {
        // crossIcon: 'url("/icons/error-cross.svg")',
      },
      borderRadius: {
        10: ['10px'],
        20: ['20px'],
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
