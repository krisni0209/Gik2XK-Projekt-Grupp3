import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import ProductRatingForm from "../components/ProductRatingForm";
function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    ProductService.getById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Laddar produkt...</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Pris: {product.price} kr</p>
      {product.imageUrl && <img src={product.imageUrl} alt={product.title} style={{ width: "200px" }} />}
    </div>
  );
}

export default ProductDetail;




