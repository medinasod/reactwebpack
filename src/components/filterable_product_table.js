import React, { Component } from 'react';
import SearchBar from './search_bar';
import ProductTable from './product_table';
import LastNameInput from './last_name_input';
import DisplayContainer from './display_container';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      isFemaleOnly: false,
      changedLastName: '',
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
  }

  handleUserInput(filterText, isFemaleOnly, changedLastName) {
    this.setState({
      filterText,
      isFemaleOnly,
      changedLastName,
    });
  }

  render() {
    return (
      <div>
        <LastNameInput
          changedLastName={this.state.changedLastName}
          onUserInput={this.updateLastName}
        />
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
        <DisplayContainer
          changedLastName={this.state.changedLastName}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
