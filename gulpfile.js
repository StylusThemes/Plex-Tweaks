'use strict'

const autoprefixer = require( 'gulp-autoprefixer' )
const beautify = require( 'gulp-beautify' )
const cleanCSS = require( 'gulp-clean-css' );
const gulp = require( 'gulp' )
const insert = require( 'gulp-file-insert' )
const rename = require( 'gulp-rename' )
const sass = require( 'gulp-dart-sass' )

gulp.task( 'autoprefix', function () {
  return gulp.src( './css/theme/*.css' )
    .pipe( autoprefixer( {
      cascade: false
    } ) )
    .pipe( gulp.dest( './css/theme' ) )
} )

gulp.task( 'usercss', function () {
  return gulp.src( './css/usercss-template.css' )
    .pipe( insert( {
      '{{theme}}': './css/theme/theme.css',
    } ) )
    .pipe( rename( 'style.user.css' ) )
    .pipe( beautify.css( {
      end_with_newline: true,
      indent_size: 2,
      preserve_newlines: true
    } ) )
    .pipe( gulp.dest( './' ) )
} )

gulp.task( 'sass', function () {
  return gulp.src( './sass/**/*.scss' )
    .pipe( sass( {
      outputStyle: 'expanded'
    } ).on( 'error', sass.logError ) )
    .pipe( gulp.dest( './css/theme' ) )
} )

gulp.task( 'sass:watch', function () {
  gulp.watch( './sass/**/*.scss', gulp.series( 'sass', 'autoprefix', 'usercss' ) )
} )

gulp.task( 'default', gulp.series( 'sass:watch' ) )
