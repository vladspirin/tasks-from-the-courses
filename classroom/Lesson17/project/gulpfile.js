var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
gulp.task('task1', function () { 
  console.log('hello');
 });
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });
});

gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});
gulp.task('watch', ['browser-sync'], function () { 
  gulp.watch('app/sass/**/*.scss', ['sass']);
  gulp.watch('app/**/*.html', browser-sync.reload);
});
gulp.task('default', ['watch']);
