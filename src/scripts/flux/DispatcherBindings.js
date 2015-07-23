var Dispatcher = require('./Dispatcher.js');
var SampleStore = require('./SampleStore.js');
var Constants = require('./Constants.js');

DispatcherBindings = {};

DispatcherBindings.bind = function() {

    Dispatcher.register(Constants.actions.CHANGE_TEXT, SampleStore.changeText);
    Dispatcher.register(Constants.actions.CHANGE_SIZE, SampleStore.changeSize);

};

module.exports = DispatcherBindings;
