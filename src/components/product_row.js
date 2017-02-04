import React, { Component } from 'react';

class ProductRow extends Component {

  render() {
    const name =
    (this.props.product.female) ?
      <span style={{ color: 'LightCoral' }}>{ this.props.product.name}</span>
      : <span style={{ color: 'SkyBlue' }}>{ this.props.product.name}</span>;
      const lastName = <span>{ this.props.changedLastName }</span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{lastName}</td>
      </tr>
    );
  }
}

export default ProductRow;
