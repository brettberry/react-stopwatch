/* @flow */

var path = require('path');
var gulp = require("gulp");
var babel = require("gulp-babel");
var gutil = require("gulp-util");
var webpack = require("webpack-stream");
var webpackConfig = require('./webpack.config.js');
var watch = require('gulp-watch');

gulp.task("default", function () {
  return gulp.src(path.join(__dirname, '/app/**/*.jsx'))
    .pipe(watch(path.join(__dirname, '/app/**/*.jsx')))
    .pipe(babel({
        optional: [
            'es7.decorators',
            'es7.comprehensions',
            'es7.asyncFunctions',
            'es7.decorators',
            'es7.exportExtensions',
            'es7.objectRestSpread',
            'es7.trailingFunctionCommas'
        ]
    }))
    .pipe(gulp.dest(path.join(__dirname,'/node_modules/app')))
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(path.join(__dirname, 'public/js')))
});
