require('normalize.css/normalize.css');
require('styles/App.css');
import FilterableProductTable from './filterable_product_table';

import React from 'react';

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
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
