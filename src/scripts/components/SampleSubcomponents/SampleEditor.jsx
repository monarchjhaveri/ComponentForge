var ActionCreator = require("../../flux/ActionCreator.js");

var SampleEditor = React.createClass({
	getInitialState: function() {
		return this.props.store.getState();
	},
	handleTextChange: function() {
		var newText = React.findDOMNode(this.refs.textbox).value;
		ActionCreator.changeText(newText);
	},
	handleSizeChange: function() {
		var newSize = React.findDOMNode(this.refs.sizebox).value
		ActionCreator.changeSize(newSize);
	},
	componentWillMount: function() {
		this._updateState();
        this.props.store.registerChangeListener(this._onChange);
	},
    _updateState: function() {
        this.setState(this.props.store.getState());
    },
    _onChange: function() {
        this._updateState();
    },
	render: function(){
		var style = {
			fontSize : this.state.fontSize + 'px'
		}
		return (
			<div>
				<input ref="textbox" type="text" onChange={this.handleTextChange}/>
				<input ref="sizebox" type="text" onChange={this.handleSizeChange}/>
			</div>
		)
	},

});

module.exports = SampleEditor;