var Constants = require('./Constants.js');

var listeners = [];

var state = {
    text: "Test",
    fontsize: 12
};

var SampleStore = {};

SampleStore.changeText = function(newText) {
    state.text = newText;
    emitChange();
}

SampleStore.changeSize = function(newSize) {
    state.size = newSize;
    emitChange();
}

SampleStore.getState = function() {
    return state;
};

SampleStore.unregisterChangeListener = function(callback) {
    listeners = listeners.filter(function(d,i) {
        return d != callback;
    })
};

SampleStore.registerChangeListener = function(callback) {
    listeners.push(callback);
};

function emitChange() {
    for(var i=0; i < listeners.length; i++) {
        listeners[i]();
    }
}

module.exports = SampleStore;