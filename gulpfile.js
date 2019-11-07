var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var glob = require('glob')

//task sass
gulp.task('sass', gulp.series( function(){
    return sass('sass/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('css'));
}));

//task watch
gulp.task('watch', gulp.series( function(){
    gulp.watch('sass/**/*.sass', gulp.parallel('sass'));
}));

//task default
gulp.task('default', gulp.series('sass', 'watch'));