import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById } from "../services/ProductService";
import { useCart } from "../context/CartContext";
 
function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
 
  useEffect(() => {
	getById(id).then(setProduct);
  }, [id]);
 
  if (!product) return <p>Laddar...</p>;
 
  return (
	<div>
  	<h2>{product.title}</h2>
  	<p>{product.description}</p>
  	<p>Pris: {product.price} kr</p>
  	{product.imageUrl && (
    	<img
      	src={product.imageUrl}
      	alt={product.title}
      	style={{ width: "200px" }}
    	/>
  	)}
  	<button onClick={() => addToCart(product)}>Lägg till i varukorgen</button>
	</div>
  );
}
 
export default ProductDetail;
