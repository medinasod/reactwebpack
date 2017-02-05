import React, { Component } from 'react';
import NameRow from './name_row';

class NameTable extends Component {

  render() {
    const rows = [];
    this.props.products.forEach((product) => {
      if (product.name.indexOf(this.props.filterText) === -1 ||
      (product.female && !this.props.isFemaleOnly)) { // Not female.
        return;
      }
      if (product.name.indexOf(this.props.filterText) === -1 ||
      (product.male && !this.props.isMaleOnly)) { // Not male.
        return;
      }
      rows.push(<NameRow
        product={product}
        key={product.name}
        changedLastName={this.props.changedLastName}
      />);
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

export default NameTable;
