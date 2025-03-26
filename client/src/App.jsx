import { Link, Routes, Route, Outlet } from 'react-router-dom'; // Keep only one import

import ProductList from './components/ProductList';
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
        <Outlet /> {/* Här visas barnroutes från main.jsx */}
      </main>
    </div>
  );
}

export default App;






