var version = "0.0.3",
    gulp    = require('gulp'),                  // Load Gulp
    plugin  = require('gulp-load-plugins')(),   // Load plugins from package.json and self invoke.
    config  = require('./config.js'),           // Load custom data from config.js
    del     = require('del'),                   // Used to delete files and folders.
    log = function(val){plugin.util.log(val);}; // Used to log in gulpfile


//--- Commands ---//
// $ gulp build
// $ gulp watch
// $ gulp clean
// $ gulp wipe
//----------------//


//--- Gulp Build ---//
gulp.task('build', ['build-html', 'build-styles']);

// Build Markup
gulp.task('build-html', function(){
    return gulp.src('./src/main.html')
    .pipe( plugin.data(function(){
        return {
            name: 'Build English',
            img: function(imgName){
              return '../src/img/' + imgName;
            }
        }
    }))
    .pipe( plugin.template() )
    .pipe( plugin.htmlReplace({
        'js': {
            src : config.app_files.js,
            tpl: '<script src="'+'.'+'%s"></script>'
        },
        'css' : 'styles/all.css',
        'header': config.app_files.header,
        'footer': config.app_files.footer
    }) )
    .pipe( plugin.rename('index.html') )
    .pipe( gulp.dest('./build/') )
    .pipe( plugin.livereload() );
});

// Build Styles
gulp.task('build-styles', function(){
    return  gulp.src( config.app_files.styles )

    .pipe( plugin.sourcemaps.init() )
    .pipe( plugin.sass() )
    .pipe( plugin.autoprefixer({browsers: ['last 2 versions','ie >= 9']}) )
    .pipe( plugin.concat('all.css') )
    .pipe( plugin.sourcemaps.write() )
    .pipe( plugin.data(function(){
        return {
            name: 'Build Styles',
            img: function(imgName){
              return '../../src/img/' + imgName;
            }
        }
    }))
    .pipe( plugin.template() )
    .pipe( gulp.dest('./build/styles') )
    .pipe( plugin.livereload() );
});


//--- Gulp Watch ---//
// watch scripts, styles and markup for changes
gulp.task('watch', function(){

    // locations to watch
    gulp.watch(['./src/scss/*.scss','./src/**/*.scss'], ['build-styles']);
    gulp.watch(['./src/js/*.js'], ['build']);
    gulp.watch(['./src/main.html'], ['build']);

    plugin.livereload.listen();

});


//--- Gulp Clean ---//
gulp.task('clean',[
    'build-clean',
]);

gulp.task('wipe',[
    'build-clean',
    'node-clean',
    'bower-clean'
]);

gulp.task('build-clean', function(){
    return del(['build']);
});

gulp.task('node-clean', function(){
    return del(['node_modules']);
});

gulp.task('bower-clean', function(){
    return del(['vendor']);
});