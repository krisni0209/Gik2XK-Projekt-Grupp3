function ProductItemLarge({ product }) {
  return (
	<div className="product-large">
  	<h2>{product.title}</h2>
  	<p>{product.description}</p>
  	<p>Pris: {product.price} kr</p>
	</div>
  );
}
 
export default ProductItemLarge;
