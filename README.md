CSS button framework [![Build Status](https://travis-ci.org/nsommer/buttons.svg)](https://travis-ci.org/nsommer/buttons)
=====================
This little CSS button library provides:

- Convenient default styles in the standard stylesheet.
- Highly configurable thanks to Sass variables (requires custom build).

Take a look at the [demo page](http://nsommer.github.io/buttons).

## Usage
Simply include the stylesheet in the head section of your HTML.

```html
<link rel="stylesheet" href="buttons.css">
```

Then, you can use the styles to make your links, inputs and buttons super awesome!

```html
<a href="#" class="button button-default">Link</a>
<input type="button" class="button button-default" value="Input">
<button type="button" class="button button-default">Button</button>
<button type="submit" class="button button-default">Submit button</button>
```

## Building and Customizations.
The final stylesheets can be compiled by typing:

```bash
npm install
grunt dist
```

Customization of the colors, sizes etc. can be done by adjusting the values of the variables. All variables are marked as `!default`. This nice feature of Sass allows you to preset those variables so that the values in `src/_variables.scss` apply only if no presets were done before. In a typical project, place all of your presets into a single file and import it before `buttons.scss`.

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
