import ProductList from "../components/ProductList";

function Home() {
  return (
    <div className="home">
     
      <section className="welcome-section">
        <h1>Välkommen till Hockeybutiken 🏒</h1>
        <p>Handla och sälj allt inom hockey!</p>
        <img
          src="https://media.istockphoto.com/id/2190174659/photo/ice-hockey-skate-action-blades-cutting-the-ice.webp?a=1&b=1&s=612x612&w=0&k=20&c=QkgNOVIgKoRLxX1VKn4x4g6qgh9SjKR3pOWo3YBiEgY="
          alt="Välkomstbild"
          style={{
            width: "300px",
            height: "auto",
            borderRadius: "12px",
            marginTop: "1rem",
          }}
        />
      </section>
	  
      <ProductList />
    </div>
  );
}

export default Home;
