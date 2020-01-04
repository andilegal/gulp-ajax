const gulp = require("gulp");

gulp.task("default", () => {
  gulp.start("copiar", "fim");
});

gulp.task("copiar", ["antes1", "antes2"], () => {
  gulp
    .src(["pastaA/**/**"])
    // .pipe(transformasao1())
    // .pipe(transformasao2())
    .pipe(gulp.dest("pastaB"));
});

gulp.task("antes1", () => {
  console.log("antes 1 !!!!");
});

gulp.task("antes2", () => {
  console.log("Antes 2!!!!");
});

gulp.task("fim", () => {
  console.log("fim");
});
