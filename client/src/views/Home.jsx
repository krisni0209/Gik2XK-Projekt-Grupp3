import ProductList from "../components/ProductList";
 
function Home() {
  return (
	<div className="home">
  	<h1>Välkommen till Hockeybutiken 🏒</h1>
  	<p>Handla och sälj allt inom hockey, nytt och begagnat!</p>
  	<ProductList />
	</div>
  );
}
 
export default Home;
