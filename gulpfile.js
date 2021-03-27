'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const SRC = './toggle/scss/*.scss'; // Where the scss files are located
const DIST = './toggle/css'; // Where the output css should go
const CHANGE = './toggle/scss/*.scss'; // which files should be watched for changes

function _sass() {
  return gulp
    .src(SRC)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(DIST));
}

function _watch() {
  return gulp.watch(CHANGE, _sass);
}

exports.default = _watch;
