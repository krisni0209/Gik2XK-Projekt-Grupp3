import { Link } from "react-router-dom";

function AdminView() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Adminpanel</h2>
      <p>Välj ett alternativ:</p>

      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "2rem" }}>
        <Link to="/products">
          <button>Alla produkter</button>
        </Link>
        <Link to="/products/new">
          <button>Lägg till ny produkt</button>
        </Link>
      </div>
    </div>
  );
}

export default AdminView;
