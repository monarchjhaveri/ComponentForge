// imports
var gulp = require('gulp');
var sass = require('gulp-sass');
var react = require('gulp-react');
var rename = require('gulp-rename');
var handleErrors = require('./gulpUtil/handleErrors.js');

var del = require('del');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var browserSync = require("browser-sync").create();

// configurations
var globals = {
    destinationFolder: "dest",
    sourceFolder: "src"
};

var config = {
    sass: {
        src: globals.sourceFolder + "/style/**/*.scss",
        dest: globals.destinationFolder + "/style"
    },
    vendor: {
        src: globals.sourceFolder + "/vendor/**",
        dest: globals.destinationFolder + "/vendor"
    },
    img: {
        src: globals.sourceFolder + "/img/*.png",
        dest: globals.destinationFolder + "/img"
    },
    javascript: {
        main: globals.sourceFolder + "/scripts/main.jsx",
        src: {
            js: globals.sourceFolder + "/scripts/**/*.js",
            jsx: globals.sourceFolder + "/scripts/**/*.jsx",
        },
        dest: globals.destinationFolder + "/scripts"
    },
    html: {
        src: globals.sourceFolder + "/**/*.html",
        dest: globals.destinationFolder + "/"
    }
};

// BrowserSync
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./dest",
        },
        notify: false
    });
});

// Watching
gulp.task('watch', function() {
    gulp.watch(config.sass.src, ['sass']);
    gulp.watch(config.javascript.src.js, ['javascript']);
    gulp.watch(config.javascript.src.jsx, ['javascript']);
    gulp.watch(config.javascript.main, ['javascript']);
    gulp.watch(config.html.src, ['copy-assets']);
    gulp.watch(config.img.src, ['copy-assets']);
    gulp.watch(config.vendor.src, ['copy-vendor-assets']);
    gulp.watch(globals.destinationFolder + "/**").on("change", browserSync.reload);
});

// compile all your Sass
gulp.task('sass', function (){
    gulp.src([config.sass.src])
        .pipe(sass())
        .pipe(rename(function() {

        }))
        .pipe(gulp.dest(config.sass.dest))
        .pipe(browserSync.stream());
});

gulp.task('copy-assets', function() {
    gulp.src([config.img.src, config.html.src])
        .pipe(rename(function() {

        }))
        .pipe(gulp.dest(globals.destinationFolder))
        .pipe(browserSync.stream());
});

gulp.task('copy-vendor-assets', function() {
    gulp.src(config.vendor.src)
        .pipe(rename(function() {

        }))
        .pipe(gulp.dest(config.vendor.dest))
        .pipe(browserSync.stream());
});

gulp.task('javascript', function() {
   //browserify(config.javascript.src)
    browserify({
        entries: [config.javascript.main],
        extensions: ['.jsx'],
        paths: ['./node_modules', './scripts', ]
    })
    .transform(reactify)
    .bundle()
    .on('error', handleErrors)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.javascript.dest))
    .pipe(browserSync.stream())

});


// the main tasks "clean" and "default" are set below
gulp.task('default', ['sass', 'copy-assets', 'copy-vendor-assets', 'javascript', 'watch', 'serve']);