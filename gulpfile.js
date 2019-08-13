
var gulp = require('gulp');
var rename = require('gulp-rename');
var scss = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

function sync(cb){
    browserSync.init({
        server: {
            baseDir: "./build/"
        },
        port: 3000
    })

    cb();
}

gulp.task('sync', sync);

function compileStyle(cb){

    gulp.src('app/scss/app.scss')
    .pipe(scss({
        outputStyle: 'compressed',
        errLogToConsole: true
    }))
    .on('error', console.error.bind(console))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream());

    cb();
}

gulp.task('compileStyle', compileStyle);

function buildHtml(cb){
    gulp.src('app/**/*.html')
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.reload({stream: true}));
    cb();
}

function buildJs(cb){
    gulp.src('app/script/*.js')
        .pipe(gulp.dest('build/script/'))
        .pipe(browserSync.reload({stream: true}));
    cb();
}

function watchFiles(cb){
    gulp.watch('./**/*.scss', compileStyle);
    gulp.watch('app/**/*.html', buildHtml);
    gulp.watch('app/**/*.js', buildJs);
    
    cb();
}

function browserReload(cb){
    browserSync.reload();
    cb();
}

function build(cb){
    gulp.series(buildHtml, buildJs, compileStyle);
    cb();
}

gulp.task('build', build);

gulp.task('default', gulp.parallel(build, sync, watchFiles));


