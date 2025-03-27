import { useEffect, useState } from "react";
import { getAll, deleteProduct } from "../services/ProductService";
import { Link } from "react-router-dom";
 
function ProductListView() {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
	getAll().then(setProducts);
  }, []);
 
  const handleDelete = async (id) => {
	if (window.confirm("Vill du verkligen ta bort produkten?")) {
  	await deleteProduct(id);
  	setProducts((prev) => prev.filter((p) => p.id !== id));
	}
  };
 
  return (
	<div>
  	<h2>Alla produkter</h2>
  	<Link to="/products/new">
    	<button>➕ Skapa ny produkt</button>
  	</Link>
  	<ul>
    	{products.map((p) => (
      	<li
        	key={p.id}
        	style={{
          	background: "#fff",
          	marginBottom: "1rem",
          	padding: "1rem",
          	border: "1px solid #ddd",
        	}}
      	>
        	<h3>{p.title}</h3>
            <p>{p.description}</p>
        	<p>Pris: {p.price} kr</p>
        	<Link to={`/products/${p.id}`}>Visa</Link> |{" "}
        	<Link to={`/products/${p.id}/edit`}>✏️ Ändra</Link> |{" "}
        	<button onClick={() => handleDelete(p.id)}>🗑️ Ta bort</button>
      	</li>
    	))}
  	</ul>
	</div>
  );
}
 
export default ProductListView;

