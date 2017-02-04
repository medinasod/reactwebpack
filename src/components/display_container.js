import React, { Component } from 'react';

class DisplayContainer extends Component {

	render() {
			return (
				<div className="DisplayContainer">
					<span>{this.props.changedLastName}</span>
				</div>
			);
  }

}

export default DisplayContainer;
