# Start Template: Gulp + WebPack + Babel

## Use the following commands to work

- To install all dependencies: `npm install`;
- To start the Gulp collector, you need to use: `npm run dev`;
- To compile the project in `production` mode: `npm run build`;

## What does Gulp do?

- compresses HTML in production mode;
- removes comments from HTML in production mode;
- Collects SCSS files, adds vendor prefixes;
- removes comments from SCSS files;
- in production mode, compresses CSS and makes a copy without compression;
- converts fonts to `.ttf`, and from `.ttf` to `woff/woff2`;
- Creates a file to connect fonts. This file is created as follows: `src/scss/config/fonts.scss`, it looks like this:

### WARNING!!!

> If there is already a `fonts.scss` file in the `src/scss/config` folder - then when adding new fonts you MUST **REMOVE** the old `fonts.scss` file. Don't worry, when you restart the build - Gulp will convert all new fonts and create a new `fonts.scss` file.

Next, what else can collect:

- compresses images and additionally converts them into `.webp' format and connects them if the browser supports this format;
- copies the `/static` folder with its contents to the final build. That is, any files can be placed in this folder and it will be added to the final assembly;
- a separate `$npm run svgSprive` command creates "svg sprites";
- before each start of the collector, the folder with the final project is cleaned so as not to collect garbage;
- with a separate `$npm run zip` command, you can archive the final folder for the customer with the project name;
- also for development `gulp' starts the server with automatic reload of the window in the browser when files are changed in the project;
- the final project is uploaded to the hosting using a separate `$npm run deployFTP' command. The options for sending the project to the desired hosting are specified in the file: `gulp/config/ftp.js`.

## What does WebPack do?

- `webpack' in this template deals with the processing of c JavaScript files;
- modular connection of import/export scripts is supported;
- when importing, there is no need to write the extension of the `.js` file, and if the import is carried out from the `index.js` file, it is not necessary to specify it:

```javascript
import * as flsFunctions from './modules'; // './modules/index.js'
```

- `webpack` using `babel` allows you to write code on your favorite **ES6+**;
- in `production` mode, JS files are compressed during final assembly, and redundant comments are removed.

## Final

A separate cherry is the `gh-pages` plugin for deploying the `/dist` folder to a separate GitHub branch to nicely deploy your project to GitHub Pages. To do this, in package.json, specify the link to your gh-pages page in the **homepage** field:

```json
"homepage": "https://{UserName}.github.io/{NameRepo}",
```
