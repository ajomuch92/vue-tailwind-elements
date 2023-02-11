module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}', './dev/**/*.{vue,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
