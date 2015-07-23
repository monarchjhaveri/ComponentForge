var Constants = require('./Constants.js');
var Dispatcher = require('./Dispatcher.js');

var ActionCreator = {};

ActionCreator.changeText = function(newText) {
    Dispatcher.dispatch(Constants.actions.CHANGE_TEXT, newText);
};

ActionCreator.changeSize = function(newSize) {
    Dispatcher.dispatch(Constants.actions.CHANGE_SIZE, newSize);
};

module.exports = ActionCreator;