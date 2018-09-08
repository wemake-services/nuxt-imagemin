# nuxt-imagemin

[![wemake.services](https://img.shields.io/badge/-wemake.services-green.svg?label=%20&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP%2F%2F%2F5TvxDIAAAAIdFJOUwAjRA8xXANAL%2Bv0SAAAADNJREFUGNNjYCAIOJjRBdBFWMkVQeGzcHAwksJnAPPZGOGAASzPzAEHEGVsLExQwE7YswCb7AFZSF3bbAAAAABJRU5ErkJggg%3D%3D)](https://wemake.services) [![Build Status](https://travis-ci.org/wemake-services/nuxt-imagemin.svg?branch=master)](https://travis-ci.org/wemake-services/nuxt-imagemin)

`Nuxt` module to minify your images.
Works with: `png`, `jpeg`, `gif`, and `svg`.


## Installation

```
npm install --save nuxt-imagemin
```

Add `nuxt-imagemin` to your `nuxt.config.js`:

```js
{
  modules: [
    'nuxt-imagemin',
  ]
}
```


## Usage

1. Put your images inside `assets` folder, for example: `logo.png`
2. Then create an element to render it: `<img src="~/assets/logo.png">`
3. When you will bundle your app for production, `nuxt` will minify your image assets

Read more about [how assets work](https://nuxtjs.org/guide/assets/).


## Options

We use `imagemin` plugin for `webpack` internally.
It has a lot of [options](https://www.npmjs.com/package/imagemin-webpack-plugin#new-imageminpluginoptions).
We pass any provided options into the `imagemin` itself:

```js
{
  modules: [
    ['nuxt-imagemin', {
      optipng: { optimizationLevel: 5 },
      gifsicle: { optimizationLevel: 2 }
    },
  ]
}
```


## License

MIT.
