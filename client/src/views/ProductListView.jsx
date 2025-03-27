import { useEffect, useState } from "react";
import { getAll, deleteProduct } from "../services/ProductService";
import { Link } from "react-router-dom";

function ProductListView() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    getAll().then(data => setProducts(data));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Vill du verkligen ta bort produkten?")) {
      await deleteProduct(id);
      setProducts(products.filter(p => p.id !== id));
    }
  };

  // 🔍 Filtrera produkter efter titel & pris
  const filteredProducts = products.filter(p => {
    const matchesTitle = p.title.toLowerCase().includes(searchText.toLowerCase());
    const price = Number(p.price);
    const withinMin = minPrice === "" || price >= Number(minPrice);
    const withinMax = maxPrice === "" || price <= Number(maxPrice);
    return matchesTitle && withinMin && withinMax;
  });

  return (
    <div style={{ maxWidth: "1000px", margin: "2rem auto" }}>
      <h2 style={{ marginBottom: "1rem" }}>Alla produkter</h2>

      {/* Tillbaka-knapp */}
      <Link to="/admin">
        <button style={{
          marginBottom: "1rem",
          backgroundColor: "#ccc",
          color: "#000",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Tillbaka till admin
        </button>
      </Link>

      {/* Skapa ny produkt */}
      <Link to="/products/new">
        <button style={{
          backgroundColor: "#0d6efd",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          fontWeight: "bold",
          marginBottom: "1rem",
          border: "none",
          cursor: "pointer"
        }}>
          Skapa ny produkt
        </button>
      </Link>

      {/* Sök och filter */}
      <div style={{ marginBottom: "1.5rem", display: "flex", gap: "1rem", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Sök på titel..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ padding: "0.5rem", flex: 1 }}
        />
        <input
          type="number"
          placeholder="Minpris"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={{ padding: "0.5rem", width: "100px" }}
        />
        <input
          type="number"
          placeholder="Maxpris"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={{ padding: "0.5rem", width: "100px" }}
        />
        <button onClick={() => {
          setSearchText("");
          setMinPrice("");
          setMaxPrice("");
        }} style={{ padding: "0.5rem", background: "#eee", border: "1px solid #ccc", cursor: "pointer" }}>
          Rensa filter
        </button>
      </div>

      {/* Produkter */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {filteredProducts.map(p => (
          <div
            key={p.id}
            style={{
              backgroundColor: "white",
              padding: "1rem",
              borderRadius: "8px",
              boxShadow: "0 0 5px rgba(0,0,0,0.1)",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <img
              src={p.imageUrl || "https://via.placeholder.com/100x100?text=Ingen+bild"}
              alt={p.title}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <div style={{ flex: 1 }}>
              <h3 style={{ marginBottom: "0.5rem" }}>{p.title}</h3>
              {p.description && <p style={{ marginBottom: "0.5rem" }}>{p.description}</p>}
              <p><strong>Pris:</strong> {p.price} kr</p>

              <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                <Link to={`/products/${p.id}`}>Visa</Link>
                <Link to={`/products/${p.id}/edit`} style={{ color: "purple" }}>Ändra</Link>
                <button
                  onClick={() => handleDelete(p.id)}
                  style={{
                    backgroundColor: "#2c3e50",
                    color: "white",
                    border: "none",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  🗑️ Ta bort
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <p>Inga produkter matchar din sökning.</p>
        )}
      </div>
    </div>
  );
}

export default ProductListView;
