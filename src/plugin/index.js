const bsStyles = require('./styles');
const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  ({ addComponents }) => {
    addComponents(bsStyles);
  },
  {}
);