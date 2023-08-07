const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js('src/js/app.js', 'public/js')
  .sass('src/sass/app.scss', 'public/css')
  .postCss('src/css/app.css', 'public/css/custom.css', [require('tailwindcss')])
  .sourceMaps()

// mix.scripts('node_modules/aos/dist/aos.js', 'public/js/app.js')

// mix.postCss('node_modules/aos/dist/aos.css', 'public/css/custom.css')

mix.copyDirectory('src/images', 'public/images')
mix.copyDirectory('src/js/custom', 'public/js/custom')
