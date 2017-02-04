import React from 'react';
import FilterableProductTable from './filterable_product_table';

require('normalize.css/normalize.css');
require('../styles/App.css');


const PRODUCTS = [
  { female: true, name: 'Lisa' },
  { female: true, name: 'Samantha' },
  { female: false, name: 'James' },
  { female: true, name: 'Jennifer' },
  { female: false, name: 'Fredrick' },
  { female: true, name: 'Amanda' },
];

class AppComponent extends React.Component {
  render() {
    return (
      <FilterableProductTable products={PRODUCTS} />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
