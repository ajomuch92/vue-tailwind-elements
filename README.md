# Vue Tailwind Elements
A library of components based on [Tailwind Elements](https://tailwind-elements.com/) and [Tailwind](https://tailwindcss.com/) for Vuejs. 
The documentation and examples are being building [here](https://vue-tailwind-elements.netlify.app/). Best and new components and features are coming. Feel free to make a pull request.

# Instalation

1. Set up the Tailwind configuration files. Follow this [link](https://tailwindcss.com/docs/installation/using-postcss) to do it.

2. Install from NPM:  
```bash
npm install --save vue-tailwind-elements
```
Import in your main.js (or index.js) file and install it:

```javascript
...
import 'vue-tailwind-elements/src/tailwind-forms.min.css';
import VueTailwindElements from 'vue-tailwind-elements';

Vue.use(VueTailwindElements);
...
```

<!-- Nuxt:
Put the last configuration into a plugin file and the use it into the nuxt.config.js file like this:

```javascript
...
  plugins: [
    '~/plugins/vue-tailwind-elements.js'
  ],
... -->

## Author

This library is created by [Aarón Montes](https://ajomuch92.site/ "Aarón Montes").

## License
MIT