import React, { Component } from 'react';
import SearchBar from './search_bar';
import NameTable from './name_table';
import LastNameInput from './last_name_input';

class FilterableNameTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      isFemaleOnly: true,
      isMaleOnly: true,
      changedLastName: '',
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
  }

  handleUserInput(filterText, isFemaleOnly, isMaleOnly) {
    this.setState({
      filterText,
      isFemaleOnly,
      isMaleOnly,
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
          isMaleOnly={this.state.isMaleOnly}
          onUserInput={this.handleUserInput}
        />
        <NameTable
          products={this.props.products}
          filterText={this.state.filterText}
          isFemaleOnly={this.state.isFemaleOnly}
          isMaleOnly={this.state.isMaleOnly}
          changedLastName={this.state.changedLastName}
        />
      </div>
    );
  }
}

export default FilterableNameTable;
