import replace from 'gulp-replace'; // Search and replacement
import plumber from 'gulp-plumber'; // Error handling
import notify from 'gulp-notify'; // Messages (hints)
import browserSync from 'browser-sync'; // Local server
import newer from 'gulp-newer'; // Checking for an update
import ifPlugin from 'gulp-if'; // Conditional greeting

const concatPathAndFileName = (path, files) => {
  return files.map((file) => `${path}/${file}`);
};

const handleError = (taskName) => {
  return plumber({
    errorHandler: notify.onError({
      title: taskName,
      message: 'Error: <%= error.message %>',
    }),
  });
};

export const plugins = {
  if: ifPlugin,
  replace,
  plumber,
  notify,
  browserSync,
  newer,
  concat: concatPathAndFileName,
  handleError,
};
