/**
 * Created by plq1966 on 05/08/2017.
 */
var path = require('path'),
    webpack = require("webpack"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    srcPath = path.join(__dirname, 'src'),
    buildPath = path.join(__dirname, 'build');

var config = {
    devtool: 'eval',
    entry: path.join(srcPath, '/app/app.module.js'),
    output: {
        path: path.join(buildPath),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.html$/,
            loader: 'html',
            query: {
                name: '[path][name].[ext]',
                context: './src'
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /\.(ttf|otf|eot|svg|woff2?)(\?.+)?$/,
            loader: 'url',
            query: {
                limit: 10000
            }
        }, {
            test: /\.png$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: '[path][name].[ext]',
                context: './src'
            }
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    },
    resolve: {
        // this tells Webpack where actually to find lodash because you'll need it in the ProvidePlugin
        alias: {
            lodash: path.resolve( __dirname, './node_modules/lodash'),
        }
    },
    plugins: [
        // Extract CSS styles
        new ExtractTextPlugin("[name].css"),
        // HtmlWebpackPlugin: Simplifies creation of HTML files to serve your webpack bundles : https://www.npmjs.com/package/html-webpack-plugin
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            favicon: 'src/res/icons/favicon.png',
            hash: true
        }),
        // this tells Webpack to provide the "_" variable globally in all your app files as lodash.
        new webpack.ProvidePlugin({
            _: "lodash",
        }),
    ]
};

module.exports = config;
