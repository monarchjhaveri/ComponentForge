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

FLUX
======

ComponentForge includes a custom implementation of React + Flux architecture. 

General instructions for creating a new view component:
1. By our convention, your new component is either a ControllerView or a Subcomponent. A ControllerView directly receives State from the Store and distributes it amongst its subcomponents. A Subcomponent is a component that is a part of a ControllerView. A subcomponent may also be a ControllerView on its own, if needs be.
2. If you are making a ControllerView, make sure that you pass a Store into it as a prop (see `main.jsx`) and register it against that store (see `SampleControllerView.jsx`)
3. If your new ControllerView or Subcomponent changes state of the store, store the logic for those state changes in a method `ActionCreator.js`. The component should pass new changes to ActionCreator by directly calling the method in `ActionCreator.js`. See the next section to learn how to propagate these changes throughout the framework.

General instructions for adding a new action that will update the SampleStore:
1. In Constants.js, create a name for your new action.
2. In ActionCreator.js, insert the logic for the action into a new function 
3. In SampleStore.js, create a function for receiving and saving the data.
4. In DispatcherBindings.js, register the SampleStore listener against your new Constants.js action name.




Enjoy your React + Flux + Browserify + Sass rapid development workflow!