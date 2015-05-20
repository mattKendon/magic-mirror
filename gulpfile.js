var gulp = require('gulp'),
    concat = require('gulp-concat')
    uglify = require('gulp-uglify')
    rename = require('gulp-rename')
    sass = require('gulp-sass')
    minifyCss = require('gulp-minify-css')
    minifyHtml = require('gulp-minify-html')
    jade = require('gulp-jade')
    ngHtml2Js = require('gulp-ng-html2js')
    concatCss = require('gulp-concat-css');

var vendor = {
    js: {
        src: [
            './bower_components/angular/angular.js',
            './bower_components/angular-aria/angular-aria.js',
            './bower_components/angular-animate/angular-animate.js',
            './bower_components/angular-material/angular-material.js',
            './bower_components/moment/moment.js',
            './bower_components/angular-weather-directive/dist/angular-weather-directive.js'
        ],
        dest: './public/javascripts/',
        watch: './bower_components/**/*.min.js'
    },
    css: {
        src: [
            './bower_components/weather-icons/css/weather-icons.min.css',
            './bower_components/angular-material/angular-material.min.css'
        ],
        dest: './public/stylesheets/',
        watch: './bower_components/**/*.min.css'
    },
    font: {
        src: [
            './bower_components/weather-icons/font/*.*',
        ],
        dest: './public/font/',
        watch: [
            './bower_components/**/*.eot',
            './bower_components/**/*.svg',
            './bower_components/**/*.ttf',
            './bower_components/**/*.woff'
        ]
    }
}

var app = {
    js: {
        src: [
            './app/app.module.js',
            './app/**/*.js'
        ],
        dest: './public/javascripts/',
        watch: './app/**/*.js'
    },
    scss: {
        src: ['./app/**/*.scss'],
        dest: './public/stylesheets/',
        watch: './app/**/*.scss'
    },
    template: {
        src: ['./app/**/*.tpl.jade'],
        dest: './public/javascripts/'
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

gulp.task('vendor-font', function() {
    gulp.src(vendor.font.src)
        .pipe(gulp.dest(vendor.font.dest));
});

gulp.task('vendor-build', ['vendor-js', 'vendor-css', 'vendor-font']);

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
        .pipe(concatCss('app.css'))
        .pipe(gulp.dest(app.scss.dest))
        .pipe(minifyCss())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest(app.scss.dest));
});

gulp.task('app-template', function() {
    gulp.src(app.template.src)
        .pipe(jade())
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes:true
        }))
        .pipe(ngHtml2Js({
            moduleName: 'app'
        }))
        .pipe(concat('template.min.js'))
        .pipe(gulp.dest(app.template.dest));
})

gulp.task('app-build', ['app-js', 'app-scss', 'app-template']);

gulp.task('watch', function() {
    gulp.watch(app.scss.src, ['app-scss']);
    gulp.watch(app.js.src, ['app-js']);
    gulp.watch(app.template.src, ['app-template']);
    gulp.watch(vendor.css.src, ['vendor-css']);
    gulp.watch(vendor.js.src, ['vendor-js']);
});

gulp.task('default', ['vendor-build', 'app-build', 'watch']);