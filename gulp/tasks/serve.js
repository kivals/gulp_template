const gulp = require('gulp');
const server = require('browser-sync').create();
const pug2html = require('./pug');
const js = require('./script');

function serve() {
  server.init({
    server: {
      baseDir: 'build',
    },
    notify: false,
  });
  gulp.watch('src/pug/**/*.pug', gulp.series(pug2html));
  gulp.watch('src/js/**/*.js', gulp.series(js)).on('change', server.reload);
  gulp.watch('build/index.html').on('change', server.reload);
}

module.exports = serve;
