import { Link } from "react-router-dom";
 
function ProductItemSmall({ product }) {
  return (
	<div className="product-card">
  	<h3>{product.title}</h3>
  	<p>{product.price} kr</p>
  	<Link to={`/products/${product.id}`}>Visa produkt</Link>
	</div>
  );
}
 
export default ProductItemSmall;
