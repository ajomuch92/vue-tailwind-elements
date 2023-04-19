/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './dev/**/*.{vue,js,ts}', ...(process.env.NODE_ENV === 'production' ? [] : ['./dev/**/*.{vue,js,ts}'])],
  theme: {
    extend: {},
  },
  plugins: [
    require('./src/plugin')
  ],
}
