import React, { Component } from 'react';
import DisplayContainer from './display_container';
import LastNameInput from './last_name_input';

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changedLastName: '',
    };

    this.handleLastName = this.handleLastName.bind(this);
  }

  handleLastName(changedLastName) {
    this.setState({
      changedLastName,
    });
  }

  render() {
    const name =
    (this.props.product.female) ?
      <span style={{ color: 'LightCoral' }}>{ this.props.product.name}</span>
      : <span style={{ color: 'SkyBlue' }}>{ this.props.product.name}</span>;
    return (
      <tr>
        <td>{name}</td>
        <td>
          <LastNameInput
            changedLastName={this.state.changedLastName}
            onUserInput={this.handleLastName}
          />
          <DisplayContainer
            changedLastName={this.state.changedLastName}
          />
        </td>
      </tr>
    );
  }
}

export default ProductRow;
