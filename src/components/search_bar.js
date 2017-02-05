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
      this.isMaleOnlyInput.checked,
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
        <div className="checkboxes">
          <input
            type="checkbox"
            className="checkbox"
            checked={this.props.isFemaleOnly}
            ref={(input) => { this.isFemaleOnlyInput = input; }}
            onChange={this.handleChange}
          />
          {' '}
          Girls
          <input
            type="checkbox"
            className="checkbox"
            checked={this.props.isMaleOnly}
            ref={(input) => { this.isMaleOnlyInput = input; }}
            onChange={this.handleChange}
          />
          {' '}
          Boys
        </div>
      </form>
    );
  }
}

export default SearchBar;
