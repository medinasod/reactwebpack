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
    this.handleLastName = this.handleLastName.bind(this);
  }

  handleUserInput(filterText, isFemaleOnly) {
    this.setState({
      filterText,
      isFemaleOnly,
    });
  }

  handleLastName(changedLastName) {
    this.setState({
      changedLastName,
    });
  }

  render() {
    return (
      <div>
        <LastNameInput
          changedLastName={this.state.changedLastName}
          onUserInput={this.handleLastName}
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
