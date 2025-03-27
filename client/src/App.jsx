import { Link, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { useState } from "react";

function App() {
  const { isAdmin, login, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === "123") {
      login();
      setShowLogin(false);
      setPasswordInput("");
      setError("");
    } else {
      setError("Fel lösenord");
    }
  };

  return (
    <div>
      <header>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 2rem",
          }}
        >
          <ul
            style={{
              display: "flex",
              gap: "1.5rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li><Link className="nav-link" to="/">Hem</Link></li>
            <li><Link className="nav-link" to="/cart">Varukorg</Link></li>
            {isAdmin && <li><Link className="nav-link" to="/admin"> 👤</Link></li>}
          </ul>

          <button
            onClick={isAdmin ? logout : () => setShowLogin(true)}
            className="nav-button"
          >
            {isAdmin ? "Logga ut" : "👤"}
          </button>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      {/*  Inloggningsruta */}
      {showLogin && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              background: "white",
              padding: "2rem",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              minWidth: "300px",
            }}
          >
            <h3>Admin-inloggning</h3>
            <input
              type="password"
              placeholder="Ange lösenord"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              style={{ padding: "0.5rem", fontSize: "1rem" }}
              autoFocus
            />
            {error && <p style={{ color: "red", margin: 0 }}>{error}</p>}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button type="submit" className="nav-button">Logga in</button>
              <button
                type="button"
                onClick={() => {
                  setShowLogin(false);
                  setError("");
                  setPasswordInput("");
                }}
                className="nav-button"
                style={{ backgroundColor: "#ccc", color: "#000" }}
              >
                Avbryt
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;

