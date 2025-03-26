import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/ProductService";
 
function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
 
  useEffect(() => {
	getProductById(id).then(res => setProduct(res.data));
  }, [id]);
 
  if (!product) return <p>Laddar...</p>;
 
  return (
	<div>
  	<h2>{product.title}</h2>
  	<p>{product.description}</p>
  	<p>Pris: {product.price} kr</p>
	</div>
  );
}
 
export default ProductDetail;


