// var gulp = require('gulp');

// var path={
//     images:'img/*.png',
//     css:'style/*.css',
//     buildImg:'dist/img',
//     buildStyle:'dist/style'
// }

// gulp.task('images', () =>

//   gulp.src(path.images)
//     // .other plugins
//     .pipe(gulp.dest(path.buildImg))

// );
// gulp.task('css', () =>

//   gulp.src(path.css)
//     // .other plugins
//     .pipe(gulp.dest(path.buildStyle))

// );
// gulp.task("default", ["css", "images"]);
const {series, parallel, src, dest, watch} = require('gulp');
const rename = require("gulp-rename");
const htmlmin = require('gulp-htmlmin');

function public(cb){
    console.log('public');
    cb();
}
exports.public = public;

function css(cb){
    console.log('css');
    cb();
}
function scss(cb){
    console.log('scss');
    cb();
}
function js(cb){
    console.log('js');
    cb();
}
function html(){
    return src('site/index.html').pipe(dest('home/'));
}


function defaultTask(cb) {
    // place code for your default task here
    console.log('Hello world! Gulp');
    cb();
}
function move(){
    // return src('site/index.html').pipe(dest('new/'));
    // return src('site/*.html').pipe(dest('new/'));
    // return src('site/lib/*.js').pipe(dest('new/js-lib/'));
    // return src('site/lib/**/*.js').pipe(dest('new/js-lib/'));
    return src(['site/lib/**/*.js', 'site/style.css', 'site/*.html', '!site/about.html']).pipe(dest('new/'));
}
exports.move = move;

function watchman(){
    watch('site/index.html', {delay: 3000}, html);
    // console.log('Ctrl + C');
    watch('site/style.css', css);
    watch('site/*', {events:'addDir'}, defaultTask);

}
exports.watchman = watchman;

function moveRename(){
    return src('site/index.html').pipe(rename('new-name.html')).pipe(htmlmin({ collapseWhitespace: true })).pipe(dest('new/'));
}
exports.moveRename = moveRename;

exports.default = parallel(series(public, scss, css), series(js));