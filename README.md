SETUP
======
(You will need `npm` and `bower` installed for this step.)

First install dependencies using `npm` and `bower`
From your project's root directory (where the `gulpfile.js` lives), run `npm install && bower install`

RUNNING
======

From your project's root directory (where the `gulpfile.js` lives), run `gulp`

WORKFLOW
======

When you run `gulp`, Gulp will Browserify + Reactify + Sassify all JS/JSX/SASS files in the `src/` folder and pipe them to the `dest/` folder (this folder will be created if it does not exist, and has been gitignored for your convenience). 
Gulp will then open a new Browser tab and serve your project's `index.html` using BrowserSync. Gulp will also `watch` process on all the files in the `src/` folder. If anything changes, it will recompile them to `dest/` and refresh your browser window.

Enjoy your React + Browserify + Sass rapid development workflow!