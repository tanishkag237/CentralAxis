/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        custom: ['i-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"'],
         inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // or pages/ if you're using the pages router
    './components/**/*.{js,ts,jsx,tsx}',
  ],
};

