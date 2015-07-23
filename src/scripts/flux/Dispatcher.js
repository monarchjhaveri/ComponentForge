var Dispatcher = {};
var _registry = {};

Dispatcher.register = function(actionName, callback) {
    var registry = _registry[actionName];
    if (!registry) {
        _registry[actionName] = [callback];
    } else {
        registry.push(callback);
    }
};
Dispatcher.dispatch = function(actionName, payload) {
    var registry = _registry[actionName];
    if (registry && registry.length > 0) {
        for (var i = 0; i < registry.length; i++) {
            registry[i](payload);
        }
    }
};

module.exports = Dispatcher;