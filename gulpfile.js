var path = require('path');
var gulp = require("gulp");
var webpackStream = require("webpack-stream");
var webpackConfig = require('./webpack.config.js');

gulp.task("default", function () {
    gulp.src(path.join(__dirname, 'app/**/*.js*'))
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest(path.join(__dirname, 'public/js')))
});
