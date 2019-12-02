var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    // css file is in the same level with your html
    gulp.watch("*.css").on('change', browserSync.reload);
});
