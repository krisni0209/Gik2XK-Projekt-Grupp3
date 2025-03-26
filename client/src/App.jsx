import { Link } from 'react-router-dom';

// Views (sidkomponenter)
import Home from './views/Home';
import ProductListView from './views/ProductListView';
import ProductDetail from './views/ProductDetail';
import ProductEdit from './views/ProductEdit';
import ShoppingCartView from './views/ShoppingCartView';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Hem</Link></li>
            <li><Link to="/products">Produkter</Link></li>
            <li><Link to="/cart">Varukorg</Link></li>
            <li><Link to="/products/new">Ny produkt</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Här kan du lägga till den dynamiska rendering av sidkomponenter */}
      </main>
    </div>
  );
}

export default App;



