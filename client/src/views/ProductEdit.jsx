import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createProduct, getProductById, updateProduct } from "../services/ProductService";
 
function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
 
  const [product, setProduct] = useState({
	title: "",
	description: "",
	price: 0,
	imageUrl: ""
  });
 
  useEffect(() => {
	if (id) {
  	getProductById(id).then(res => setProduct(res.data));
	}
  }, [id]);
 
  const handleChange = (e) => {
	setProduct({ ...product, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
	e.preventDefault();
	if (id) {
  	await updateProduct(id, product);
	} else {
  	await createProduct(product);
	}
	navigate("/products");
  };
 
  return (
	<form onSubmit={handleSubmit}>
  	<input name="title" value={product.title} onChange={handleChange} placeholder="Titel" required />
  	<textarea name="description" value={product.description} onChange={handleChange} placeholder="Beskrivning" />
  	<input name="price" type="number" value={product.price} onChange={handleChange} placeholder="Pris" />
  	<input name="imageUrl" value={product.imageUrl} onChange={handleChange} placeholder="Bildlänk" />
  	<button type="submit">{id ? "Uppdatera" : "Skapa"} produkt</button>
	</form>
  );
}
 
export default ProductEdit;
