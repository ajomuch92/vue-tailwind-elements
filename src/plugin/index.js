const styles = require('./styles');
const plugin = require('tailwindcss/plugin');
const buttons = require( './buttons');
const pagination = require('./pagination');
const inputs = require('./inputs');
const spinners = require('./spinners');
const alerts = require( './alerts');
const toasts = require('./toasts');

module.exports = plugin(
  ({ addComponents, theme }) => {
    addComponents(styles);
    addComponents(buttons(theme));
    addComponents(pagination(theme));
    addComponents(inputs(theme));
    addComponents(spinners(theme));
    addComponents(alerts(theme));
    addComponents(toasts(theme));
  },
  {}
);