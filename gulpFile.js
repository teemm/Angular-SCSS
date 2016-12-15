const gulp = require('gulp'),
    concat = require('gulp-concat'),
    batch = require('gulp-batch'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass');
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    tsconfig = require('./tsconfig.json');

gulp.task('build-development-vendor-js', function () {
    return gulp.src([
        "node_modules/core-js/client/shim.min.js",
        "node_modules/zone.js/dist/zone.js",
        "node_modules/reflect-metadata/Reflect.js",
        "node_modules/systemjs/dist/system.src.js",
        "system.js"
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('build-development-app-js', function () {
    return gulp.src([
        "resources/js/system.js"
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('build-vendor-js', function () {
    return gulp.src([
        "node_modules/core-js/client/shim.min.js",
        "node_modules/zone.js/dist/zone.js"
    ])
        .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('public/js'));
});

/**************************************************/
// gulp.task('build-less', function () {
//
//     return gulp.src("resources/less/bootstrap.less")
//         .pipe(less())
//         .on('error', function (err) {
//             console.log(err.message);
//             this.emit('end');
//         })
//         .pipe(concat('app.css'))
//         .pipe(cleanCSS({compatibility: 'ie8'}))
//         .pipe(prefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('./public/css'));
//
// });

gulp.task('build-sass', function () {
    return gulp.src('resources/scss/main.scss')
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(prefixer({
                    browsers: ['last 2 versions'],
                    cascade: false
                }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('build-vendor-css', function () {

    return gulp.src([
        "node_modules/font-awesome/css/font-awesome.css"
    ])
        .pipe(concat('vendor.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./public/css'));

});

gulp.task('build-development', ['build-development-vendor-js', 'build-development-app-js', 'build-vendor-css', 'build-sass']);

gulp.task('build', ['build-vendor-js', 'build-vendor-css', 'build-sass']);

gulp.task('default', ['build']);

gulp.task('watch', ["build-development"], function () {

    watch('resources/scss/**/*.scss', batch(function (events, done) {
        gulp.start(["build-sass"], done);
    }));

});