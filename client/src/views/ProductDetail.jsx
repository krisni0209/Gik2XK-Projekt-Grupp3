import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById } from "../services/ProductService";
import { useCart } from "../context/CartContext";
import ProductRatingForm from "../components/ProductRatingForm";
import Rating from "../components/Rating";
 
function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
 
  const fetchProduct = () => {
	getById(id).then(setProduct);
  };
 
  useEffect(() => {
	fetchProduct();
  }, [id]);
 
  if (!product) return <p>Laddar...</p>;
 
  const average =
	product.ratings && product.ratings.length > 0
  	? product.ratings.reduce((sum, r) => sum + r.value, 0) /
    	product.ratings.length
  	: null;
 
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
  	<br />
  	<button onClick={() => addToCart(product)}>Lägg till i varukorgen</button>
 
  	{average && (
    	<>
      	<h4>Snittbetyg:</h4>
      	<Rating value={average} />
    	</>
  	)}
 
  	<ProductRatingForm productId={id} onRatingSubmitted={fetchProduct} />
	</div>
  );
}
 
export default ProductDetail;
