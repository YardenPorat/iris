/* eslint-env node */
// var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var STYLEGUIDE_DIR = 'node_modules/steadicam';


// Webpack settings for React Docs

module.exports = {
    entry: './' + STYLEGUIDE_DIR + '/main.jsx',

    output: {
        filename: '[name].bundle.js',
        path: path.resolve('./build-styleguide'),
    },

    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: '/node_modules/', include: [
                path.resolve(__dirname, 'docs'),
                path.resolve(__dirname, 'data'),
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'index.jsx'),
                path.resolve(__dirname, STYLEGUIDE_DIR),
            ] },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]--[hash:base64:5]!postcss-loader') },
            { test: /\.svg$/, loader: 'babel?presets[]=es2015,presets[]=react!svg-react' },
        ],
    },

    node: {
        fs: 'empty',
    },

    postcss: [
        require('autoprefixer'),
    ],

    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.svg'],
        modulesDirectories: ['node_modules', 'components'],
    },

    plugins: [
        new ExtractTextPlugin('css/modules.css', { allChunks: true }),
    ],
};
