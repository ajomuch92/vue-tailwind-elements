# Vue Tailwind Elements
A light library of components based on [Tailwind Elements](https://tailwind-elements.com/) and [Tailwind](https://tailwindcss.com/) for Vuejs.
Currently, there are more than 40 components including custom directives and icon utility.

### New Features 💥
* Fixing small bugs
* Adding slot to dropdown
* Adding social icons
* Adding more props to some components (button, table)
* Adding more components (Chip, ScrollToTop, Tooltip and Carousel)
* Adding support to custom icons

# Instalation

1. Set up the Tailwind configuration files. Follow this [link](https://tailwindcss.com/docs/installation/using-postcss) to do it.

2. Install from NPM (both libraries):  
```bash
npm install tw-elements vue-tailwind-elements
```
Import in your main.js (or index.js) file and install it:

```javascript
...
import 'tw-elements';
import VueTailwindElements from 'vue-tailwind-elements';

Vue.use(VueTailwindElements);
...
```

## Nuxt:
Put the last configuration into a plugin file and the use it into the nuxt.config.js file like this:

```javascript
...
  plugins: [
    { src: '~/plugins/vue-tailwind-elements.js', mode: 'client' }
  ],
...

```

And add this line to your tailwind.config.js file::

```javascript
...
  module.exports = {
    content: [
      './node_modules/vue-tailwind-elements/**/*.{js,ts,vue}'
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('tw-elements/dist/plugin')
    ],
  }
...

```

## Author

This library is created by [Aarón Montes](https://ajomuch92.site/ "Aarón Montes"). 
**Support me to improve and maintain this library**
<a href="https://www.buymeacoffee.com/ajomuch92" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## Contribution

Want to contribute? Great!. Open a [new PR here](https://github.com/ajomuch92/vue-tailwind-elements/pulls) or a [new issue here](https://github.com/ajomuch92/vue-tailwind-elements/issues)

## License
MIT
