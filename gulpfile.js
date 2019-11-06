var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

//task sass
gulp.task('sass', function(){return sass('sass/*.sass').pipe(gulp.dest('css'))});

//task defaul
gulp.task('default', function(){});