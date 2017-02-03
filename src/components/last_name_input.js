import React, { Component } from 'react';

class LastNameInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(
      this.changedLastName.value
    );
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Last Name"
          value={this.props.changedLastName}
          ref={(input) => { this.changedLastName = input; }}
          onChange={this.handleChange}
        />
      </form>
    );
  }

}

export default LastNameInput;
