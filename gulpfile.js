var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var ngmin = require('gulp-ngmin');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var rimraf = require('gulp-rimraf');
var bs = require('browser-sync').create();

var paths = {
    scripts: ['./app/src/**/*.js', '!./app/bower_components/**/*.js'],
    html: [
    './app/src/**/*.html',
    '!./app/index.html',
    '!./app/bower_components/**/*.html'
  ],
    index: './app/index.html',
    build: './build/'
}

gulp.task('rimraf', function () {
    gulp.src(paths.build, {
            read: false
        })
        .pipe(rimraf());
});

gulp.task('copy', ['rimraf'], function () {
    gulp.src(paths.html)
        .pipe(gulp.dest('build/'));
});

gulp.task('usemin', ['copy'], function () {
    gulp.src(paths.index)
        .pipe(usemin({
            css: [minifyCss(), 'concat'],
            js: [ngmin(), uglify()]
        }))
        .pipe(gulp.dest(paths.build))
});

gulp.task('build', ['usemin']);

gulp.task('connect', function () {
    connect.server({
        root: 'app/'
    });
});

gulp.task('bs', function () {
    bs.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('default', []);