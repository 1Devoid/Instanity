import gulp from 'gulp';
import fs from 'fs';
import chalk from 'chalk';
import fonter from 'gulp-fonter-fix';
import ttf2woff2 from 'gulp-ttf2woff2';

import { filePaths } from '../config/paths.js';
import { plugins } from '../config/plugins.js';

const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  heavy: 800,
  black: 900,
};

const otfToTtf = () => {
  return (
    gulp /** Font search .otf */
      .src(`${filePaths.srcFolder}/fonts/*.otf`, {})
      .pipe(plugins.handleError('FONTS'))

      /** Conversion to .ttf */
      .pipe(fonter({ formats: ['ttf'] }))

      /** Download to the source folder */
      .pipe(gulp.dest(`${filePaths.srcFolder}/fonts/`))
  );
};

const ttfToWoff = () => {
  return (
    gulp /** Font search [.ttf] and conversion to [.woff2] */
      .src(`${filePaths.srcFolder}/fonts/*.ttf`, {})
      .pipe(plugins.handleError('FONTS'))
      .pipe(ttf2woff2())
      .pipe(gulp.dest(`${filePaths.build.fonts}`))

      /**
       * If you need to comment.
       * Conversion to [.woff]
       * */
      //.pipe(gulp.src(`${filePaths.srcFolder}/fonts/*.ttf`))
      //.pipe(fonter({ formats: ['woff'] }))
      //.pipe(gulp.dest(`${filePaths.build.fonts}`))

      /** Search for fonts [.woff, .woff2] and download to the final folder*/
      .pipe(gulp.src(`${filePaths.srcFolder}/fonts/*.{woff,woff2}`))
      .pipe(gulp.dest(`${filePaths.build.fonts}`))
  );
};

const fontStyle = () => {
  /** Font connection styles file */
  const fontStylesFile = `${filePaths.srcFolder}/scss/config/fonts.scss`;

  /** Reading font folders and checking if they exist */
  fs.readdir(filePaths.build.fonts, (err, fontFiles) => {
    if (fontFiles) {
      /** Checking if a styles file exists for connecting fonts*/
      if (!fs.existsSync(fontStylesFile)) {
        /** If the file does not exist, create it*/
        fs.writeFile(fontStylesFile, '', cb);
        let newFileOnly;

        fontFiles.forEach((file) => {
          /** Recording the connection of fonts in the style file */
          const fileName = file.split('.')[0];

          if (newFileOnly !== fileName) {
            const [fontName, fontWeight = 'regular'] = fileName.split('-');
            const fontWeightValue = fontWeights[fontWeight.toLowerCase()];

            fs.appendFile(
              fontStylesFile,
              `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fileName}.woff2") format("woff2");\n\tfont-weight: ${fontWeightValue};\n\tfont-style: normal;\n}\n`,
              cb
            );

            newFileOnly = fileName;
          }
        });
      } else {
        /** Warning, if the file exists - it must be deleted */
        console.log(
          chalk.bold.white.bgGreenBright(
            'The scss/config/fonts.scss file already exists.\nTo update the file, it must be deleted!'
          )
        );
      }
    }
  });

  return gulp.src(filePaths.srcFolder);

  function cb(err) {
    if (err) {
      console.log(chalk.bold.white.bgRed('File write error: '), err);
    } else {
      console.log(
        chalk.bold.white.bgGreenBright('[Fonts.scss file saved successfully]')
      );
    }
  }
};

export { otfToTtf, ttfToWoff, fontStyle };
