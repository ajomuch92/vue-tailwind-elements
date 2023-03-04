const styles = require('./styles');
const plugin = require('tailwindcss/plugin');

module.exports = plugin(
    addComponents(styles);
  },
  {}
);