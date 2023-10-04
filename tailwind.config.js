/** @type {import('tailwindcss').Config} */

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
        accent: '#274B77',
        primary: '#1F9FD5',
        secondary: '#1FB0E2',
        tertiary: '#1D9ED3',
        lighterBlue: '#20B1E2',
        lightBlue: '#1875B3',
        blue: '#1674B1',
        darkBlue: '#105699',
        darkerBlue: '#0E5497',
        white: '#FFFFFF',
        pink: '#FF7777',
      },

      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
      },

      borderRadius: {
        10: ['10px'],
        20: ['20px'],
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
