import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(
      this.filterTextInput.value,
      this.isFemaleOnlyInput.checked,
    );
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Filter Names"
          value={this.props.filterText}
          ref={(input) => { this.filterTextInput = input; }}
          onChange={this.handleChange}
        />
        <section>
          <input
            type="checkbox"
            checked={this.props.isFemaleOnly}
            ref={(input) => { this.isFemaleOnlyInput = input; }}
            onChange={this.handleChange}
          />
          {' '}
          Only show female names.
        </section>
      </form>
    );
  }
}

export default SearchBar;
