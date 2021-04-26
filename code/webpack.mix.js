const mix = require('laravel-mix');

mix.postCss('resources/css/app.css', 'css', [
    require('tailwindcss'),
    require('postcss-nested')
])

mix.js('resources/js/app.js', 'js', )
    .options({
        postCssUrls: false
    });