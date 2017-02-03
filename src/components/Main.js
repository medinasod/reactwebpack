import React from 'react';
import FilterableProductTable from './filterable_product_table';

require('normalize.css/normalize.css');
require('../styles/App.css');


const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', female: true, name: 'Lisa' },
  { category: 'Sporting Goods', price: '$9.99', female: true, name: 'Samantha' },
  { category: 'Sporting Goods', price: '$29.99', female: false, name: 'James' },
  { category: 'Electronics', price: '$99.99', female: true, name: 'Jennifer' },
  { category: 'Electronics', price: '$399.99', female: false, name: 'Fredrick' },
  { category: 'Electronics', price: '$199.99', female: true, name: 'Amanda' },
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
