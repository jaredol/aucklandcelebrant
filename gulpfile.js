'use strict';


var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify       = require('gulp-uglify');
var cleanCSS     = require('gulp-clean-css');
var pump         = require('pump');
var rename       = require('gulp-rename');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({ 
            browsers: ['last 2 version', 'IE 10', 'IE 11'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

// Compile JS
gulp.task('compress', function (cb) {
    pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('js-min')
    ],
        cb
    );
});

gulp.task('default', ['serve']);


