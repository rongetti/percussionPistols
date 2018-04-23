var gulp = require('gulp');
var sequence = require('gulp-sequence');
var clean = require('gulp-clean');
var shell = require('gulp-shell');
// var util = require('gulp-util');
var useref = require('gulp-useref');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleancss = require('gulp-clean-css');
var urlAdjuster = require('gulp-css-url-adjuster');

/* Tasks */

gulp.task('build', sequence('clean-www', 'sources', 'compress', 'css', 'html', 'assets'));

gulp.task('assets', ['icons', 'images', 'fonts']);



/* Build */

gulp.task('clean-www', function () {
    return gulp.src('client/www', {read: false})
        .pipe(clean());
});

gulp.task('sources', function () {
    return gulp.src('client/src/index.html')
        .pipe(useref()) /* Pull sources from script and link tags */
        .pipe(gulp.dest('client/www'));
});

gulp.task('compress', function () {
    return gulp.src('client/www/bundle.js')
        .pipe(uglify({ mangle: false /* Don't mangle angular */ }).on('error', function (error) {
            console.log(error);
        }))
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest('client/www'));
});

gulp.task('html', function () {
    return gulp.src(['client/src/modules/**/*.html'],  {
        base: 'client/src/modules'
    })
        .pipe(gulp.dest('client/www/modules'));
});

gulp.task('css', function () {
    return gulp.src('client/www/bundle.css')
        .pipe(cleancss({
            level: {
                1: {
                    specialComments: 0
                }
            }
        }))
        . pipe(urlAdjuster({
            replace:  ['../','assets/']
        }))
        .pipe(gulp.dest('client/www'));
});

/* Assets */

gulp.task('icons', function () {
    return gulp.src(['client/src/assets/icons/**/*'])
        .pipe(gulp.dest('client/www/assets/icons'));
});

gulp.task('images', function () {
    return gulp.src(['client/src/assets/images/**/*'])
        .pipe(gulp.dest('client/www/assets/images'));
});

gulp.task('fonts', function () {
    return gulp.src(['client/src/assets/fonts/**/*'])
        .pipe(gulp.dest('client/www/assets/fonts'));
});


/* Deploy */

gulp.task('deploy-android', shell.task(
    [
        'cordova build android'
    ], {
        cwd: __dirname + '/client'
    }
));

/* default */

gulp.task('default', function () {

});
