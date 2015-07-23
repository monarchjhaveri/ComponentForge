var SampleEditor = require ("./SampleSubcomponents/SampleEditor.jsx");

var SampleControllerView = React.createClass({
	getInitialState: function() {
		return this.props.store.getState();
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
		var divstyle = {
			fontSize : this.state.size + 'px'
		};

		return (
			<div style={divstyle}>
				<span style={divstyle}>{this.state.text}</span><br/>
				<SampleEditor/>
			</div>
		)
	}
});
module.exports = SampleControllerView;