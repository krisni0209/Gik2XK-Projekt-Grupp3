import { Link } from 'react-router-dom';
import './ProductList.css';

function ProductList({ products, onDelete }) {
  return (
    <div className="shop-container">
      <h1 className="shop-header">Hockeyprodukter</h1>
      <Link to="/products/new" className="create-button">Lägg till produkt</Link>

      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <h3>{product.title}</h3>
            <p><strong>Pris:</strong> {product.price} kr</p>
            <p>{product.description}</p>

            <div className="product-buttons">
              <Link to={`/products/${product.id}/edit`} className="edit-button">Ändra</Link>
              <button onClick={() => onDelete(product.id)} className="delete-button">Ta bort</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;



