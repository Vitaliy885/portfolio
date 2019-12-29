var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    watch        = require('gulp-watch'),
    uglify       = require('gulp-uglify'),
    minifyCSS    = require('gulp-clean-css'),
    rename       = require('gulp-rename'),
    changed      = require('gulp-changed'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin     = require('gulp-imagemin'),
    browserSync  = require('browser-sync');


gulp.task('html', done => {
    gulp.src('dist/*.html')
        .pipe(gulp.dest('app'))
        .pipe(browserSync.reload({stream: true}))
    done();

});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('sass', function () {
    return gulp.src('dist/sass/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 2 version'))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(changed('app/css'))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('js', function () {
    return gulp.src('dist/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('images', function () {
    return gulp.src('dist/images/*')
        .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true,
            svgoPlugings: [
                {
                    removeViewBox: true
                }
            ]
        }))
        .pipe(gulp.dest('app/images'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function () {
    gulp.watch('dist/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('dist/js/**/*.js', gulp.series('js'));
    gulp.watch('dist/*.html', gulp.series('html'));
    gulp.watch('dist/images/*', gulp.series('images'));
});

gulp.task( 'default', gulp.parallel('sass', 'js', 'browser-sync', 'watch') );

