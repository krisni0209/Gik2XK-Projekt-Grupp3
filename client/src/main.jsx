import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 
import App from './App.jsx';
import Home from './views/Home.jsx';
import ProductEdit from './views/ProductEdit.jsx';
import ProductListView from './views/ProductListView.jsx';
import ProductDetail from './views/ProductDetail.jsx';
import ShoppingCartView from './views/ShoppingCartView.jsx';
import NotFound from './components/NotFound.jsx';
 
const router = createBrowserRouter([
  {
	path: '/',
	element: <App />,
	children: [
  	{ path: '/', element: <Home /> },
  	{ path: '/products', element: <ProductListView /> },
  	{ path: '/products/new', element: <ProductEdit /> },
  	{ path: '/products/:id', element: <ProductDetail /> },
  	{ path: '/products/:id/edit', element: <ProductEdit /> },
  	{ path: '/cart', element: <ShoppingCartView /> },
  	{ path: '*', element: <NotFound /> },
	],
  },
]);
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
	<RouterProvider router={router} />
  </StrictMode>
);
