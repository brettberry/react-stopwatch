"use strict";

var path = require('path');

module.exports = {
    target: 'web',
    cache: true,
    watch: true,
    entry: {
        app: path.join(__dirname, 'app/app.jsx'),
    },
    output: {
        publicPath: '/static/js/',
        filename: "bundle.[name].js"
    },
    resolve: {
        modulesDirectories: [ path.join(__dirname, 'node_modules') ],
        extensions: ['', '.js', '.jsx'],
        alias: {
            app: path.join(__dirname, 'app')
        }
    },
    resolveLoader: { root: path.join(__dirname, 'node_modules') },
    module: {
        loaders: [
            {
                test: /[\/]promise\.js$/,
                loaders: ['exports?Promise']
            },
            {
                test: /[\/](localforage|indexeddb|localstorage|websql)\.js$/,
                loaders: ['imports?this=>window']
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "jsx-loader"
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    optional: [
                        'es7.comprehensions',
                        'es7.classProperties',
                        'es7.functionBind',
                        'es7.decorators',
                        'es7.exportExtensions',
                        'es7.trailingFunctionCommas',
                        'es7.exponentiationOperator',
                        'es7.asyncFunctions',
                        'es7.objectRestSpread'
                    ]
                }
            }
        ]
    }
};
