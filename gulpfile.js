var gulp = require('gulp'),
    concat = require('gulp-concat')
    uglify = require('gulp-uglify')
    rename = require('gulp-rename')
    sass = require('gulp-sass')
    minifyCss = require('gulp-minify-css')
    concatCss = require('gulp-concat-css');

var vendor = {
    js: {
        src: [
            './bower_components/angular/angular.js',
            './bower_components/angular-aria/angular-aria.js',
            './bower_components/angular-animate/angular-animate.js',
            './bower_components/angular-material/angular-material.js'
        ],
        dest: './public/javascripts/',
        watch: './bower_components/**/*.min.js'
    },
    css: {
        src: ['./bower_components/**/*.min.css'],
        dest: './public/stylesheets/',
        watch: './bower_components/**/*.min.css'
    }
}

var app = {
    js: {
        src: ['./app/**/*.js'],
        dest: './public/javascripts/',
        watch: './app/**/*.js'
    },
    scss: {
        src: ['./app/**/*.scss'],
        dest: './public/stylesheets/',
        watch: './app/**/*.scss'
    }
}

gulp.task('vendor-js', function() {
    gulp.src(vendor.js.src)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(vendor.js.dest))
        .pipe(uglify())
        .pipe(rename('vendor.min.js'))
        .pipe(gulp.dest(vendor.js.dest));
});

gulp.task('vendor-css', function() {
    gulp.src(vendor.css.src)
        .pipe(concatCss('vendor.css'))
        .pipe(gulp.dest(vendor.css.dest));
});

gulp.task('app-js', function() {
    gulp.src(app.js.src)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(app.js.dest))
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest(app.js.dest));
});

gulp.task('app-scss', function() {
    gulp.src(app.scss.src)
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest(app.scss.dest))
        .pipe(minifyCss())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest(app.scss.dest));
});

gulp.task('watch', function() {
    gulp.watch(app.scss.watch, ['app-scss']);
    gulp.watch(app.js.watch, ['app-js']);
    gulp.watch(vendor.css.watch, ['vendor-css']);
    gulp.watch(vendor.js.watch, ['vendor-js']);
});

gulp.task('default', ['vendor-js', 'vendor-css', 'app-js', 'app-scss', 'watch']);