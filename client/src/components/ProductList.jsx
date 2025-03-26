import ProductItemSmall from './ProductItemSmall';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItemSmall key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

