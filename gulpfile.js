import gulp from 'gulp';
import { filePaths } from './gulp/config/paths.js';
import { plugins } from './gulp/config/plugins.js';

/**
 * Імпорт завдань
 */
import { copy } from './gulp/tasks/copy.js';
import { copyRootFiles } from './gulp/tasks/copyRootFiles.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { javaScript } from './gulp/tasks/javaScript.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontStyle } from './gulp/tasks/fonts.js';
import { createSvgSprite } from './gulp/tasks/createSvgSprite.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';

const isBuild = process.argv.includes('--build');
const isDev = !process.argv.includes('--build');

/**
 * Спостерігач за змінами у файлах
 */
function watcher() {
  gulp.watch(filePaths.watch.static, copy);
  gulp.watch(filePaths.watch.html, html);
  gulp.watch(filePaths.watch.scss, scss);
  gulp.watch(filePaths.watch.js, javaScript);
  gulp.watch(filePaths.watch.images, images);
}

/**
 * Послідовна обробка шрифтів
 * */
const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);

/**
 * Паралельні завдання у режимі розробки
 * */
const devTasks = gulp.parallel(
  copy,
  copyRootFiles,
  html,
  scss,
  javaScript,
  images,
  createSvgSprite
);

/**
 * Основні завдання
 * */
const mainTasks = gulp.series(fonts, devTasks);

/**
 * Побудова сценаріїв виконання завдань
 * */
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

/**
 * Виконання сценарію за замовчуванням
 * */
gulp.task('default', dev);

/**
 * Експорт сценаріїв
 * */
export { dev, build, deployZIP, deployFTP, createSvgSprite, isBuild, isDev };
