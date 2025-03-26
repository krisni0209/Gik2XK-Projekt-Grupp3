import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// App & Views
import App from "./App.jsx";
import Home from "./views/Home.jsx";
import ProductEdit from "./views/ProductEdit.jsx";
import ProductListView from "./views/ProductListView.jsx";
import ProductDetail from "./views/ProductDetail.jsx";
import ShoppingCartView from "./views/ShoppingCartView.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Root element for all routes
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <ProductListView /> },
      { path: "/products/new", element: <ProductEdit /> },
      { path: "/products/:id", element: <ProductDetail /> },
      { path: "/cart", element: <ShoppingCartView /> },
      { path: "*", element: <NotFound /> }, // Handle all invalid routes
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
