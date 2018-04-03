const gulp = require("gulp");
const favicons = require("gulp-favicons");
const log = require("fancy-log");

gulp.task("favicon", function () {
  return gulp.src("src/img/picalizer.png").pipe(favicons({
    appName: "Picalizer",
    appDescription: "Edit images using javascript",
    developerName: "disjfa",
    developerURL: "http://disjfa.nl/",
    background: "#27ae60",
    theme_color: "#fff",
    path: "",
    url: "https://disjfa.github.io/picalizer/",
    display: "standalone",
    orientation: "any",
    start_url: "/picalizer/?homescreen=1",
    version: 1.0,
    logging: false,
    online: false,
    html: "index.html",
    pipeHTML: true,
    replace: true,
  }))
    .on("error", log)
    .pipe(gulp.dest("./icon"));
});
