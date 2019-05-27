'use strict'

let autoprefixer = require( 'gulp-autoprefixer' )
let beautify = require( 'gulp-beautify' )
let cleanCSS = require( 'gulp-clean-css' );
let gulp = require( 'gulp' )
let insert = require( 'gulp-file-insert' )
let rename = require( 'gulp-rename' )
let sass = require( 'gulp-sass' )

sass.compiler = require( 'node-sass' )

gulp.task( 'autoprefix', function () {
  return gulp.src( './css/theme.css' )
    .pipe( autoprefixer( {
      browsers: [
        '> 0.2%',
        'last 2 versions'
      ],
      cascade: false
    } ) )
    .pipe( gulp.dest( './css' ) )
} )

gulp.task( 'minify-css', function () {
  return gulp.src( './css/optionals/*.css' )
    .pipe( cleanCSS() )
    .pipe( gulp.dest( './css/optionals/minified' ) )
} );

gulp.task( 'usercss', function () {
  return gulp.src( './css/usercss-template.css' )
    .pipe( insert( {
      '{{theme}}': './css/theme.css',
      '{{hover-cast-list}}': './css/optionals/minified/hover-cast-list.css',
      '{{hide-cast-list}}': './css/optionals/minified/hide-cast-list.css',
      '{{expand-movie-extras}}': './css/optionals/minified/expand-movie-extras.css',
      '{{hide-extras}}': './css/optionals/minified/hide-extras.css',
      '{{hide-related-lists}}': './css/optionals/minified/hide-related-lists.css',
      '{{hover-posters}}': './css/optionals/minified/hover-posters.css',
      '{{zoom-black-bar}}': './css/optionals/minified/zoom-black-bar.css'
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
    .pipe( gulp.dest( './css' ) )
} )

gulp.task( 'sass:watch', function () {
  gulp.watch( './sass/**/*.scss', gulp.series( 'sass', 'autoprefix', 'minify-css', 'usercss' ) )
} )

gulp.task( 'default', gulp.series( 'sass:watch' ) )
