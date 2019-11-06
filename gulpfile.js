var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');

//task sass
gulp.task('sass', function(){return sass('sass/**/*.sass').pipe(gulp.dest('css'))});

//task watch
gulp.task('watch', function(){gulp.watch('sass/**/*.sass', ['sass'])});

//task default
gulp.task('default', function(){});