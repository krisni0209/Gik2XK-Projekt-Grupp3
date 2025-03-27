import { useEffect, useState } from "react";
import { getAll } from "../services/ProductService";
import Rating from "./Rating";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll().then(setProducts);
  }, []);

  return (
    <div>
      <h2 style={{ marginTop: "3rem", textAlign: "center", paddingRight: "2rem" }}>
  Produkter
</h2>

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
                <img src={product.imageUrl} alt={product.title} />
              )}
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p><strong>{product.price} kr</strong></p>
              {avg && <Rating value={avg} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
