/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './dev/**/*.{vue,js,ts}', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('./src/plugin')
  ],
}
