import React from 'react';
import FilterableNameTable from './filterable_name_table';

require('normalize.css/normalize.css');
require('../styles/App.css');


const FIRSTNAMES = [
  { male: false, female: true, name: 'Lisa' },
  { male: false, female: true, name: 'Samantha' },
  { male: true, female: false, name: 'James' },
  { male: false, female: true, name: 'Jennifer' },
  { male: true, female: false, name: 'Fredrick' },
  { male: false, female: true, name: 'Amanda' },
  { male: true, female: false, name: 'Jack' },
  { male: true, female: false, name: 'Simon' },
  { male: true, female: false, name: 'Samuel' },
  { male: false, female: true, name: 'Lauren' },
  { male: true, female: false, name: 'Jose' },
  { male: false, female: true, name: 'Julie' },
  { male: false, female: true, name: 'Joy' },
  { male: true, female: false, name: 'Allen' },
  { male: true, female: false, name: 'Christopher' },
  { male: true, female: false, name: 'Joseph' },
  { male: false, female: true, name: 'Alice' },
  { male: true, female: false, name: 'Stephen' },
  { male: false, female: true, name: 'Elizabeth' },
];

class AppComponent extends React.Component {
  render() {
    return (
      <FilterableNameTable products={FIRSTNAMES} />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
