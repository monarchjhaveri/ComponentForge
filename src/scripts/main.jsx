var SampleControllerView = require("./components/SampleControllerView.jsx");
var SampleStore = require("./flux/SampleStore.js");
var DispatcherBindings = require("./flux/DispatcherBindings.js")

React.render(
	<SampleControllerView store={SampleStore}/>,
	document.getElementById("container")
);

DispatcherBindings.bind();
