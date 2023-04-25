/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './dev/**/*.{vue,js,ts}', ...(process.env.NODE_ENV !== 'production' ? [] : ['./src/**/*.{vue,js,ts}'])],
  theme: {
    extend: {},
  },
  plugins: [
    require('./src/plugin')
  ],
}
