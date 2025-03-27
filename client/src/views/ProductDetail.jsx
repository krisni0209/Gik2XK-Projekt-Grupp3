import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById } from "../services/ProductService";
import { useCart } from "../context/CartContext";
import Rating from "../components/Rating";
import ProductRatingForm from "../components/ProductRatingForm";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); //  För att gå tillbaka
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    getById(id).then(setProduct);
  }, [id]);

  const handleBack = () => {
    navigate("/"); //  Gå till startsidan
  };

  if (!product) return <p>Laddar produkt...</p>;

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Pris: {product.price} kr</p>
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.title}
          style={{ width: "300px", borderRadius: "10px" }}
        />
      )}

      <div style={{ margin: "1rem 0" }}>
        <button onClick={() => addToCart(product)} style={{ marginRight: "1rem" }}>
           Lägg till i varukorg
        </button>
        {/*  Tillbaka-knapp */}
        <button onClick={handleBack}> Tillbaka till Hem</button>
      </div>

      <hr />

      {/*  Betygskomponent */}
      <Rating value={product.ratings?.length ? Math.round(product.ratings.reduce((acc, r) => acc + r.value, 0) / product.ratings.length) : 0} />

      <ProductRatingForm productId={product.id} onRatingSubmitted={() => getById(id).then(setProduct)} />
    </div>
  );
}

export default ProductDetail;
