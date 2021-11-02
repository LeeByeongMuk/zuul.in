const mix = require('laravel-mix');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        extensions: ['*'],
        alias: {
            '@': `${__dirname}/resources/js`,
            '@sass': `${__dirname}/resources/sass`
        }
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    'sass-loader'
                ]
            }
        ]
    }
});

mix.options({
    processCssUrls: false
});

mix.js('resources/js/app.js', 'public/js');

if (mix.inProduction()) {
    mix.version();
}
