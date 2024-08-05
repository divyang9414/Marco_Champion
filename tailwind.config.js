/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
    './Assets/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      },
      screens: {
        xs: '320px',
        msm: '425px',
        sm: '576px',
        mmd: '640px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
      },
      spacing: {
        '15': '60px',
      },
    },
  },
  plugins: [],
}