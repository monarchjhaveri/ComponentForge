var ActionCreator = require("../../flux/ActionCreator.js");

var SampleEditor = React.createClass({
	handleTextChange: function() {
		var newText = React.findDOMNode(this.refs.textbox).value;
		ActionCreator.changeText(newText);
	},
	handleSizeChange: function() {
		var newSize = React.findDOMNode(this.refs.sizebox).value
		ActionCreator.changeSize(newSize);
	},
	render: function(){
		return (
			<div>
				<input ref="textbox" type="text" onChange={this.handleTextChange}/>
				<input ref="sizebox" type="text" onChange={this.handleSizeChange}/>
			</div>
		)
	},

});

module.exports = SampleEditor;