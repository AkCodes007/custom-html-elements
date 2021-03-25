'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

function _sass() {
  return gulp
    .src('./slider/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./slider/css'));
}

function _watch() {
  return gulp.watch('./slider/scss/', _sass);
}

exports.default = _watch;
