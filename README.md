CSS button framework [![Build Status](https://travis-ci.org/nsommer/buttons.svg)](https://travis-ci.org/nsommer/buttons)
=====================
If you need pretty buttons for your website without the heavy overhead of a big framework, this small set of CSS rules is the right solution. Just copy the `dist/buttons.css` into your project! However, it's also fully customizable and extendable if needed by overwriting sass variables and mixin reusage.

Take a look at the [demo page](http://nsommer.github.io/buttons) to see the buttons in action or to learn how to use the CSS classes.

## Building and Customizations.
The final stylesheets can be compiled by typing:

```bash
npm install
grunt dist
```

Customization of the colors, sizes etc. can be done by overwriting the values of the variables. All variables are marked as `!default`. This nice feature of Sass allows you to preset those variables so that the values in `src/_variables.scss` apply only if no presets were done before. In a typical project, place all of your presets into a single file and import it before `buttons.scss`.

```sass
//
// Example content which disables gradients.
//
// $gradients: false;
//
@import "buttons-customizations";

// The main buttons file (buttons.scss).
@import "buttons";
```

## License
MIT license rocks.
