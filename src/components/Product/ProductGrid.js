import { Component } from 'react';
import ProductCard from './ProductCard';
import ProductGridLoading from './ProductGridLoading';

export default class ProductGrid extends Component {
  render() {
    const { loading, products } = this.props;
    const listProducts = products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ));

    if (loading) {
      return <ProductGridLoading />;
    }

    return (
      !!products.length && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-14px gap-y-5 md:gap-5 lg:gap-22px">
          {listProducts}
        </div>
      )
    );
  }
}
