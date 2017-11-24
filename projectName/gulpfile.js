var gulp = require('gulp'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean')

var htmls = ['./src/*.html'],
    js = ['./src/js/*.js'],
    sassfiles = ['./src/css/*.scss'],
    css = ['./src/css/*.css']

gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        port: 8009,
        livereload: true
    })
})

gulp.task('html', function() {
    gulp.src(htmls)
        .pipe(gulp.dest('./dist'))
})

gulp.task('devjs', function() {
    gulp.src(js)
        .pipe(gulp.dest('./dist/js'))
})

gulp.task('projs', function() {
    gulp.src(js)
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
})

gulp.task('sass', function() {
    return gulp.src(sassfiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('css', function() {
    gulp.src(css)
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('reload', function() {
    gulp.src('./src/*')
        .pipe(connect.reload())
})

gulp.task('watch', function() {
    gulp.watch(htmls, ['html', 'reload']),
    gulp.watch(sassfiles, ['sass', 'reload']),
    gulp.watch(js, ['devjs', 'reload'])
})

gulp.task('clean', function () {
    return gulp.src('./dist/', {read: false})
        .pipe(clean())
})

gulp.task('default', ['html', 'sass', 'css'])
gulp.task('dev', ['default', 'devjs', 'connect', 'watch'])
gulp.task('build', ['clean'], function() {
    gulp.start(['html', 'sass', 'css', 'projs'])
})