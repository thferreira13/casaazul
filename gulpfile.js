var gulp = require('gulp');
var sass = require('gulp-sass');

//task sass
gulp.task('sass', gulp.series( function(){
    return gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}));

//task watch
gulp.task('watch', gulp.series( function(){
    gulp.watch('./sass/**/*.sass', gulp.parallel('./sass'));
}));

//task default
gulp.task('default', gulp.series('sass', 'watch'));