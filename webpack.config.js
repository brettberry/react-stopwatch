"use strict";

var webpack = require("webpack");
var path = require('path');

module.exports = {
    target: "web",
    watch: true,
    entry: {
        app: "./node_modules/app/app.js",
    },
    output: {
        filename: "bundle.[name].js"
    },
    resolve: {
        modulesDirectories: [ path.join(__dirname, '/node_modules/') ],
        extensions: ['', '.js', '.jsx']
    },
};
