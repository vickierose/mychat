'use strict';

var autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    connect = require('gulp-connect'),
    imagemin = require('gulp-imagemin'),
    gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    minifyCSS = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    pngquant = require('imagemin-pngquant'),
    rename = require('gulp-rename'),
    rigger = require('gulp-rigger'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglyfly = require('gulp-uglyfly');


// server connect
gulp.task('connect', function() {
    connect.server({
        port: 5005,
        root: './dist',
        livereload: true
    });
});

// html
gulp.task('html', function() {
    gulp.src('src/main.html')
        .pipe(rigger())
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload())
        .pipe(notify({
            message: 'I did (html)!',
            onLast: true
        }));
});

// sass
gulp.task('sass', function() {
    gulp.src('src/assets/stylesheets/mainstyles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(rename('mainstyles.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/assets/stylesheets/'))
        .pipe(connect.reload())
        .pipe(notify({
            message: 'I did (css)!',
            onLast: true
        }));
});

// js
gulp.task('js', function() {
    gulp.src('src/assets/scripts/*.js')
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglyfly())
        .pipe(rename('mainpage.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/assets/scripts/'))
        .pipe(connect.reload())
        .pipe(notify({
            message: 'I did (js)!',
            onLast: true
        }));
});

// img
gulp.task('img', function() {
    gulp.src('src/assets/pics/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest('dist/assets/pics/'))
        .pipe(connect.reload())
        .pipe(notify({
            message: 'I did (img)!',
            onLast: true
        }));
});

// watch
gulp.task('watch', function() {
    gulp.watch('src/**/*.html', ['html'])
    gulp.watch('src/assets/stylesheets/**/*.scss', ['sass'])
    gulp.watch('src/assets/scripts/**/*.js', ['js'])
    gulp.watch('src/assets/pics/**/*', ['img'])
});

// default
gulp.task('default', ['connect', 'html', 'sass', 'js', 'watch']);

// build
gulp.task('build', ['html', 'sass', 'js', 'img']);
