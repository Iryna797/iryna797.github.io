import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';

export const js = () => {
  return app.gulp
    .src(app.path.src.js)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'JS',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(concat('script.min.js'))
    .pipe(
      app.plugins.if(
        app.isBuild,
        babel({
          presets: ['@babel/env'],
        })
      )
    )
    .pipe(uglify())
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
};
