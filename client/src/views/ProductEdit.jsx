import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById, create, update } from "../services/ProductService";

function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    imageUrl: "",
  });

  useEffect(() => {
    if (id) {
      getById(id).then(data => setProduct(data));
    }
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await update(id, product);
    } else {
      await create(product);
    }
    navigate("/products");
  };

  return (
    <div style={{
      maxWidth: "500px",
      margin: "3rem auto",
      background: "#fff",
      padding: "2rem",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ marginBottom: "1.5rem" }}>{id ? "Ändra" : "Skapa"} produkt</h2>

      {/* Tillbaka-knapp */}
      <Link to="/admin">
        <button
          style={{
            marginBottom: "1rem",
            backgroundColor: "#ccc",
            color: "#000",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Tillbaka till admin
        </button>
      </Link>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          name="title"
          value={product.title}
          onChange={handleChange}
          placeholder="Titel"
          required
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Beskrivning"
          rows="3"
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <input
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          placeholder="Pris"
          required
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <input
          name="imageUrl"
          value={product.imageUrl}
          onChange={handleChange}
          placeholder="Bildlänk"
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "0.75rem 1rem",
            fontSize: "1rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          {id ? "Spara ändringar" : "Skapa produkt"}
        </button>
      </form>
    </div>
  );
}

export default ProductEdit;
