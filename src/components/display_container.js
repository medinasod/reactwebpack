import React, { Component } from 'react';

class DisplayContainer extends Component {

	getInitialState() {
		return {
			value: this.changedLastName.value,
		};
	}
	render() {
		return (
			<div className="DisplayContainer">
				<span>{this.state.changedLastName.value}</span>
			</div>
		);
	}

}

export default DisplayContainer;
