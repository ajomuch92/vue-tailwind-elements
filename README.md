# Vue Tailwind Elements
A light library of components based on [Tailwind Elements](https://tailwind-elements.com/) and [Tailwind](https://tailwindcss.com/) for Vuejs.
The documentation and examples are being building [here](https://vue-tailwind-elements.netlify.app/). Currently, there are more than 30 components. Best and new components and features are coming. Feel free to make a pull request.

### New Features 💥
* Global method to show loading, toasts and modals ($showLoading, $showToast, $showModal)
* Sizes, centered and no header/no footer for modal
* Flush on accordion
* Types of button for its components

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

## Nuxt:
Put the last configuration into a plugin file and the use it into the nuxt.config.js file like this:

```javascript
...
  plugins: [
    '~/plugins/vue-tailwind-elements.js'
  ],
...

```

## Author

This library is created by [Aarón Montes](https://ajomuch92.site/ "Aarón Montes"). 
**Support me to improve and maintain this library**
<a href="https://www.buymeacoffee.com/ajomuch92" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## License
MIT
