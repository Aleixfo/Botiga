'use strict';

//Plugins a importar
var gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    uglify = require("gulp-uglify"),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    { series, parallel } = require('gulp');

//Minimitza els arxius de la carpeta .css i deixa'ls dins la carpeta "dist/css"
function minimitzacss() {
    return gulp.src('./css/*.css')
        .pipe(sass({ outputStyle: 'compressed', sourceComments: false }))
        .pipe(gulp.dest('./dist'));
};
exports.mincss = minimitzacss;

//Minimitza els arxius de la carpeta "js" i deixa'ls dins "dist/js".
function minimitzajs() {
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
};
exports.minjs = minimitzajs;

function minimitzahtml() {
    return gulp.src('./*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
}

exports.minhtml = minimitzahtml;

function minimitzaimg() {
    return gulp.src('./img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist'))
}

exports.minimg = minimitzaimg;

//Tasca Conjunta
gulp.task('build', series(minimitzacss, minimitzajs, minimitzahtml, minimitzaimg));