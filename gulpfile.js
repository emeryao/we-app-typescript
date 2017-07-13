const fs = require('fs');
const gulp = require('gulp');
const execSync = require('child_process').execSync;

gulp.task('clean', () => {
    let res = fs.existsSync('dist')
    if (res) {
        execSync('powershell.exe remove-item dist -Recurse', {
            stdio: 'inherit'
        });
    }
});

gulp.task('build', () => {
    execSync('tsc', {
        stdio: 'inherit'
    });
});

gulp.task('move', () => {
    gulp.src('src/**/*.wxml')
        .pipe(gulp.dest('dist'));

    gulp.src('src/**/*.wxss')
        .pipe(gulp.dest('dist'));

    gulp.src('src/**/*.json')
        .pipe(gulp.dest('dist'));

    gulp.src('src/img/*.*')
        .pipe(gulp.dest('dist/img'));

    gulp.src('src/**/*.js')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build', 'move']);