import { useEffect, useState } from "react";
import { getAll } from "../services/ProductService";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { useCart } from "../context/CartContext";

function ProductListView() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    getAll().then(setProducts);
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Alla produkter</h2>

      <div className="product-grid">
        {products.map((product) => {
          const avg =
            product.ratings && product.ratings.length > 0
              ? product.ratings.reduce((sum, r) => sum + r.value, 0) /
                product.ratings.length
              : null;

          return (
            <div key={product.id} className="product-card">
              {product.imageUrl && (
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "0.5rem",
                    }}
                  />
                </Link>
              )}
              <h3>
                <Link
                  to={`/products/${product.id}`}
                  style={{ textDecoration: "none", color: "#222" }}
                >
                  {product.title}
                </Link>
              </h3>
              <p>{product.description}</p>
              <p><strong>{product.price} kr</strong></p>
              {avg && <Rating value={avg} />}

              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  justifyContent: "center",
                  marginTop: "0.5rem",
                }}
              >
                <Link to={`/products/${product.id}`}>
                  <button>Visa</button>
                </Link>
                <button onClick={() => addToCart(product)}>Lägg till 🛒</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductListView;
