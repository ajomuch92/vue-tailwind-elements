const styles = require('./styles');
const plugin = require('tailwindcss/plugin');
const buttons = require( './buttons');

module.exports = plugin(
  ({ addComponents, theme }) => {
    addComponents(styles);
    addComponents(buttons(theme));
  },
  {}
);