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
      boxShadow: {
        'custom-light': '0 10px 10px rgba(255, 255, 255, 0.1)',
        'custom-heavy': '0 10px 10px rgba(0, 0, 0, 0.3)',
      },
      perspective: {
        '500': '500px',
        '1000': '1000px',
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '50px',
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

