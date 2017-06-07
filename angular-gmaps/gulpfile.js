/**
 * Created by plq1966 on 05/08/2016.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var buildDirectory = 'build';

gulp.task('deleteBuild', function () {
    del([
        buildDirectory + '/**',
        "!" + buildDirectory
    ]);
});

exports.fileResult = gulp;