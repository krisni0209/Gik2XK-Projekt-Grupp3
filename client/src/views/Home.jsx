import ProductList from "../components/ProductList";
function Home() {
  return (
	<div className="home">
  	<h1>Välkommen till Hockeybutiken 🏒</h1>
    <p>Handla och sälja allt innom Hockey nytt!</p>
  	<ProductList />
	</div>
  );
}
 
export default Home;
