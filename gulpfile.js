/**
 * - Convert sass to css
 * - bundle js modules (browserify)
 * - strip comments
 */

let gulp = require('gulp');
let sass = require('gulp-sass');
let browser = require('gulp-browser');

let OUTPUT_DIRECTORY = 'public';

// html, css, and js tasks

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('public'));
});

gulp.task('css', function () {
    return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('public'));
});

gulp.task('js', function () {
    return gulp.src('js/app.js')
        .pipe(browser.browserify())
        .pipe(gulp.dest('public'));
});

gulp.task('watch', ['html', 'css', 'js'], function (){
    gulp.watch('index.html', ['html']);
    gulp.watch('scss/*.scss', ['css']);
    gulp.watch('js/*.js', ['js']);
});
// watch