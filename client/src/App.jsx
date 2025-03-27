import { Link, Outlet } from "react-router-dom";
 
function App() {
  return (
	<div>
  	<header>
    	<nav>
      	<ul>
        	<li><Link to="/">Hem</Link></li>
        	<li><Link to="/products">Produkter</Link></li>
        	<li><Link to="/products/new">Ny produkt</Link></li>
        	<li><Link to="/cart">Varukorg</Link></li>
      	</ul>
    	</nav>
  	</header>
  	<main>
    	<Outlet />
  	</main>
	</div>
  );
}
 
export default App;
