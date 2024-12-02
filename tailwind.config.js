/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['PartialSansKR-Regular', 'ui-sans-serif', 'system-ui'],
        noto: ['"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

