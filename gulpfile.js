var gulp = require('gulp');
const { prependListener } = require('gulp');

function movecss(done) {
 
  return  gulp.src("node_modules/@salesforce-ux/design-system/assets/**/*.*")
  .pipe(gulp.dest('public/vendor/salesforce-lightning-design-system'));
}

var build = gulp.series(movecss);

exports.default = build;
