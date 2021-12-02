'use strict';

//Plugins a importar
var gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    uglify = require("gulp-uglify"),

    { series, parallel } = require('gulp');
/*babel = require("gulp-babel"),
concat = require("gulp-concat"),
rename = require("gulp-rename"),
{ series, parallel } = require('gulp');*/



//Minimitza els arxius de la carpeta .css i deixa'ls dins la carpeta "dist/css". Prerequisit: tasca "sass".
function minimitzacss() {
    return gulp.src('./css/*.css')
        .pipe(sass({ outputStyle: 'compressed', sourceComments: false }))
        .pipe(gulp.dest('./dist/css'));
};
exports.mincss = minimitzacss;

//Minimitza els arxius de la carpeta "js" i deixa'ls dins "dist/js".
function minimitzajs() {
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
};
exports.minjs = minimitzajs;





//executi totes les tasques (excepte els watchers), és a dir, executant la tasca "kittens" s'hauria de deixar preparat el projecte per pujar a producció.
gulp.task('MinTot', series(minimitzacss, minimitzajs));