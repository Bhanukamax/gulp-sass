'use strict';

var gulp = require('gulp')
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
	return gulp.src('./src/sass/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer('last 2 versions'))
	.pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', function(){
	gulp.watch([
		'./src/sass/*.scss',
		'./src/sass/**/*.scss'
		]
		, ['sass']);
}); 
