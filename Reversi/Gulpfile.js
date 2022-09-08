const { series, watch, src, dest } = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const gulpSass = require('gulp-sass');
const uglifyjs = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const browserSync = require('browser-sync').create();

const html = (done) => {
  src([`./src/index.html`])
    .pipe(dest('./dist'));
  done();
}

const sass = (done) => {
 src(['./src/sass/*.sass'])
    .pipe(gulpSass()
      .on('error', gulpSass.logError))
    .pipe(concat('min.all.css'))
    .pipe(autoPrefixer())
    .pipe(uglifycss())
    .pipe(dest('./dist/'));
  done();
}

const css = (done) => {
  src(['./src/css/*.css'])
    .pipe(concat('min.all.css'))
    .pipe(autoPrefixer())
    .pipe(uglifycss())
    .pipe(dest('./dist/'));
  done();
}

const imgUri = './src/public/**/*.{gif,jpg,jpeg,png,svg}';
const img = (done) => {
  src([imgUri])
    .pipe(dest('./dist/public'));
  done();
}

const js = (done) => {
  src(['./src/js/*.js']) 
    .pipe(concat('all.min.js'))
    .pipe(uglifyjs())
    .pipe(dest('./dist/'));
  done();
}

var vendorUris = ['jquery/dist/jquery.min.js'];

const vendor = (done) => {
    src(vendorUris.map(vendor => `./node_modules/${vendor}`))
      .pipe(concat('vendor.min.js'))
      .pipe(uglifyjs())
      .pipe(dest('./dist/'));
    done();
  };

const test = () => {
  browserSync.init({
    serveStatic: ['./test/'], 
    server: {baseDir: './src/'}}
  );

  watch(['./test/index.html'])
    .on('change', browserSync.reload)
  watch(['./src/js/*.js'])
    .on('add', browserSync.reload)
    .on('change', browserSync.reload);
  watch(['./test/js/*.spec.js'])
    .on('add', browserSync.reload)
    .on('change', browserSync.reload);
}

const watchFiles = () => {
  browserSync.init({server: {baseDir: './dist/'}});

  watch(['./src/index.html'], series(html))
    .on('change', browserSync.reload)
  watch(['./src/css/*.css'], series(css))
    .on('add', browserSync.reload)
    .on('change', browserSync.reload);
  watch([imgUri], series(img))
    .on('add', browserSync.reload)
    .on('remove', browserSync.reload);
  watch(['./src/sass/*.sass'], series(sass))
    .on('add', browserSync.reload)
    .on('change', browserSync.reload);
  watch(['./src/js/*.js'], series(js))
    .on('add', browserSync.reload)
    .on('change', browserSync.reload);
}
watchFiles.displayName = 'watch';

const config = {
  name: 'World'
};

// Taak
const hello = function (done) {
  console.log(`Greetings from ${config.name}!`)
  done();
}

const build = series(html, css, img, vendor, js);

exports.watch = series(build, watchFiles);
exports.html = html;
exports.sass = sass;
exports.css = css;
exports.img = img;
exports.js = js;
exports.vendor = vendor;
exports.test = series(build, test);
exports.hello = hello;