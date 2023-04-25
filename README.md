# Vue Tailwind Elements
A light library of components based on [Tailwind Elements](https://tailwind-elements.com/) and [Tailwind](https://tailwindcss.com/) for Vuejs.
Currently, there are more than 40 components including custom directives and icons utility.

### New Features 💥
* Now compatible with Tailwind v3
* Adding min width to date and time picker
* Adding selectable prop to button group

# Instalation

1. Install Tailwind. Follow this [guide](https://tailwindcss.com/docs/guides/vite#vue) to do it.

2. Install the package from NPM:  
```bash
npm install vue-tailwind-elements
```
3. Import in your main.js (or index.js) file and install it:

```javascript
...
import VueTailwindElements from 'vue-tailwind-elements';

Vue.use(VueTailwindElements);
...
```

4. And add these lines to your tailwind.config.js file:

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
      require('vue-tailwind-elements/src/plugin'),
    ],
  }
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

## Author

This library is created by [Aarón Montes](https://ajomuch92.site/ "Aarón Montes"). 
**Support me to improve and maintain this library**
<a href="https://www.buymeacoffee.com/ajomuch92" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## Contribution

Want to contribute? Great!. Open a [new PR here](https://github.com/ajomuch92/vue-tailwind-elements/pulls) or a [new issue here](https://github.com/ajomuch92/vue-tailwind-elements/issues)

## License
MIT
