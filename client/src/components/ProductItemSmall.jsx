import { Link } from 'react-router-dom';

function ProductItemSmall({ product }) {
  return (
    <div className="product-card-small">
      <h3>{product.title}</h3>
      <img src={product.imageUrl} alt={product.title} />
      <p>{product.price} kr</p>
      <Link to={`/products/${product.id}`}>Visa mer</Link>
    </div>
  );
}

export default ProductItemSmall;

