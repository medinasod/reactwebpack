import React, { Component } from 'react';
import SearchBar from './search_bar';
import ProductTable from './product_table';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      isFemaleOnly: false,
      changedLastName: '',
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText, isFemaleOnly) {
    this.setState({
      filterText,
      isFemaleOnly,
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          isFemaleOnly={this.state.isFemaleOnly}
          onUserInput={this.handleUserInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          isFemaleOnly={this.state.isFemaleOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
