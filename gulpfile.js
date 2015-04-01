var gulp = require('gulp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');

gulp.task('default', function () {
    return gulp.src('src/**/*.es6')
    .pipe(watch('src/**/*.es6'))
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});