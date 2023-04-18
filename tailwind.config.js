/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}', './dev/**/*.{vue,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('./src/plugin')
  ],
}
