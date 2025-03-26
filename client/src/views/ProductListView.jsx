import { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import { Link } from "react-router-dom";

function ProductListView() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getAll().then(data => setProducts(data));
  }, []);

  const handleDelete = async (id) => {
    await ProductService.delete(id);
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div>
      <h2>Alla produkter</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.price} kr</p>
            <Link to={`/products/${p.id}`}>Visa</Link>{" | "}
            <Link to={`/products/${p.id}/edit`}>Ändra</Link>{" | "}
            <button onClick={() => handleDelete(p.id)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListView;

