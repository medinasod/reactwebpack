import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    const name =
    (this.props.product.female) ?
      <span style={{ color: 'DarkCyan' }}>{ this.props.product.name}</span>
      : <span style={{ color: 'LightCoral' }}>{ this.props.product.name}</span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
