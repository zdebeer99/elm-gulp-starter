var gulp = require('gulp');
var elm  = require('gulp-elm');
var uglify = require('gulp-uglify');
var fs     = require('fs');
var gutil  = require('gulp-util');
var del = require('del')
var webserver = require('gulp-webserver');

// elm-make --yes
gulp.task('init', elm.init);

gulp.task('default', ['build', 'files']);

gulp.task('run', ['build','files','watch','server']);

gulp.task('build', ['init'], function(){
  return gulp.src('src/*.elm')
    //.pipe(elm.make({filetype: 'html'}))
    .pipe(elm.bundle('app.js',{warn:true}))
    .pipe(gulp.dest('dest/'));
});

gulp.task('files', function(){
  return gulp.src('src/index.html')
  .pipe(gulp.dest('dest/'))
})

gulp.task('build_release', ['init'], function(){
  return gulp.src('src/*.elm')
    .pipe(elm())
    .pipe(uglify())
    .pipe(gulp.dest('dest/'));
});


gulp.task('clean', function(cb){
    del(["dest/**/*"], {force: true} , cb)
})

//path:'dest/',
gulp.task('server', function() {
  gulp.src('dest')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: false,
      fallback: 'index.html'
    }));
});

gulp.task('watch', function(){
  gulp.watch(['src/**/*.elm'],['build'])
  gulp.watch(['src/*.html'],['files'])
});
