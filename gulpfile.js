
var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('regSass',function(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass({outputStyle:'expanded'}))
        .pipe(gulp.dest('./src/css'))      
});

gulp.task('jtSass',function(){
    gulp.watch('./src/sass/*.scss',['regSass']);
});