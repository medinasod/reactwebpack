import React, { Component } from 'react';
import ProductRow from './product_row';

class ProductTable extends Component {

  render() {
    const rows = [];
    this.props.products.forEach((product) => {
      if (product.name.indexOf(this.props.filterText) === -1 ||
      (!product.female && this.props.isFemaleOnly)) {
        return;
      }
      rows.push(<ProductRow product={product} key={product.name} />);
    });
    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
