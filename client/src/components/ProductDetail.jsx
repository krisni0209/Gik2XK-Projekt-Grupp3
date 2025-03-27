import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import ProductRatingForm from "../components/ProductRatingForm";
import Rating from "../components/Rating";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = () => {
    ProductService.getById(id).then(setProduct).catch(err => {
      console.error("Kunde inte hämta produkt:", err);
    });
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) return <p>Laddar produkt...</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Pris: {product.price} kr</p>
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.title}
          style={{ width: "200px", marginBottom: "1rem" }}
        />
      )}

      <h3>⭐ Betyg</h3>
      {product.ratings?.length > 0 ? (
        <ul>
          {product.ratings.map((rating) => (
            <li key={rating.id} style={{ marginBottom: "1rem" }}>
              <Rating value={rating.value} />
              {rating.comment && <p>{rating.comment}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <p>Inga betyg ännu.</p>
      )}

      <ProductRatingForm
        productId={product.id}
        onRatingSubmitted={fetchProduct}
      />
    </div>
  );
}

export default ProductDetail;
