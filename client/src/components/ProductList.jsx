import { useEffect, useState } from "react";
import { getAllProducts } from "../services/ProductService";
import ProductItemSmall from "./ProductItemSmall";
 
function ProductList() {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
	getAllProducts().then(res => setProducts(res.data));
  }, []);
 
  return (
	<div className="product-list">
  	{products.map(p => (
    	<ProductItemSmall key={p.id} product={p} />
  	))}
	</div>
  );
}
 
export default ProductList;



