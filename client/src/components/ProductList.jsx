import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getAll().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <h2>Produkter</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Pris: {product.price} kr</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
