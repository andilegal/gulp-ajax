const gulp = require("gulp");
const concat = require("gulp-concat");
// const uglity = require("gulp-uglify");
const babel = require("gulp-babel");

gulp.task("default", () => {
  return (
    gulp
      .src("src/**/*.js")
      .pipe(
        babel({
          comments: false,
          minified: true,
          presets: ["env"]
        })
      )
      // .pipe(uglity())
      .on("error", function(err) {
        console.log(err);
      })
      .pipe(concat("codigo.min.js"))
      .pipe(gulp.dest("build"))
  );
});
