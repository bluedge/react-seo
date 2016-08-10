var React 			= require('react');
var ReactDOM 		= require('react-dom');



module.exports = React.createClass({
	getInitialState: function() {
		return { wishes: ['Peace on earth', 'Drinkable water for everyone', 'Free ice cream for kids'] };
	},
	handleNewWish: function(newWish) {

		var newWishes = this.state.wishes;
		newWishes.push(newWish);
		
		this.setState({wishes: newWishes});
	},
	render: function() {	
		var li = this.state.wishes.map(function(wish) {
			return (<ListItem wish={wish} key={wish} />);
		});
		
		return (
			<div className="row">
				<div className="col-xs-12 col-sm-6">
					<h4>Add your wish</h4>
					<Form wishes={this.state.wishes} onNewWish={this.handleNewWish} />
				</div>
				<div className="col-xs-12 col-sm-6">
					<h4>X-mas wish list</h4>
					<ul>
						{li}
					</ul>
				</div>
			</div>
		);
	}
});


var ListItem = React.createClass({
	render: function() {
		return (
			<li>{this.props.wish}</li>
		);
	}
});


var Form = React.createClass({
	getInitialState: function() {
		return {newWish: ''};
	},
	handleWishChange: function(e) {
		this.setState({newWish: e.target.value.trim()});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var newWish = this.state.newWish;
		if (!newWish) return;

		// Add a new wish
		this.props.onNewWish(newWish);
		
		// Reset state
		this.setState({newWish: ''});
	},
	render: function() {
		return (
			<form className="form-inline" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Add a new wish" onChange={this.handleWishChange} />
				</div>
				<button type="submit" className="btn btn-primary">Add</button>
			</form>
		);
	}
});