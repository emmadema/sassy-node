var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
//gulp task named serve and it is going to run sass

	//when task serve i run I will start a stati serve at the route (./)
    browserSync.init({
        server: "./"
    });

    gulp.watch("sass/**/*.scss", ['sass']);
    //watching everything that is html and when its saved reload 
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/**/*.scss")
    	//pipe sass
        .pipe(sass())
        //into the css file
        .pipe(gulp.dest("./css/"))
        //then reload the browser 
        .pipe(browserSync.stream());
});

//runs on port 3000
gulp.task('default', ['serve']);