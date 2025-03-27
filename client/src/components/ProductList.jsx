import { useEffect, useState } from "react";
import { getAll } from "../services/ProductService";
import ProductItemSmall from "./ProductItemSmall";
 
function ProductList() {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
	getAll().then((data) => {
  	setProducts(data);
	});
  }, []);
 
  return (
	<div>
  	<h2>Produkter</h2>
  	<div className="product-list">
    	{products.map((product) => (
      	<ProductItemSmall key={product.id} product={product} />
    	))}
  	</div>
	</div>
  );
}
 
export default ProductList;
