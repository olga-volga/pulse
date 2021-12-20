"use strict";

const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const webpack = require("webpack-stream");

const dist = "dist/";
//const dist = "C:/MAMP/htdocs/pulse";

gulp.task('html', function() {
    return gulp.src("src/*.html")
        .pipe(gulp.dest(dist))
        .pipe(browserSync.stream());
});

gulp.task('styles', function() {
    return gulp.src("src/scss/**/*.scss")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(dist + "/css"))
        .pipe(browserSync.stream());
});

gulp.task('build-js', function() {
    return gulp.src("src/js/main.js")
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'script.js'
            },
            watch: false,
            devtool: "source-map",
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                            }
                        }
                    }
                ]
            }
        }))
        .pipe(gulp.dest(dist))
        .on("end", browserSync.reload);
});

gulp.task('php', function() {
    return gulp.src("src/php/*.php")
        .pipe(gulp.dest(dist + "/php"));
});

gulp.task('fonts', function() {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest(dist + "/fonts"));
});

gulp.task('images', function() {
    return gulp.src("src/img/**/*")
        .pipe(gulp.dest(dist + "/img"));
});

gulp.task("watch", function() {
    browserSync.init({
        server: "dist/",
        port: 4000,
        notify: true
    });
    gulp.watch("src/*.html", gulp.parallel('html'));
    gulp.watch("src/scss/**/*.+(scss|css)", gulp.parallel('styles'));
    gulp.watch("src/php/*.php", gulp.parallel('php'));
    gulp.watch("src/fonts/**/*", gulp.parallel('fonts'));
    gulp.watch("src/img/**/*", gulp.parallel('images'));
    gulp.watch("src/js/**/*.js", gulp.parallel('build-js'));
});

gulp.task('build', gulp.parallel('html', 'styles', 'php', 'fonts', 'images', 'build-js'));

gulp.task('build-prod-js', function() {
    return gulp.src("src/js/main.js")
        .pipe(webpack({
            mode: 'production',
            output: {
                filename: 'script.js'
            },
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                            }
                        }
                    }
                ]
            }
        }))
        .pipe(gulp.dest(dist));
});

gulp.task('default', gulp.parallel('watch', 'build'));