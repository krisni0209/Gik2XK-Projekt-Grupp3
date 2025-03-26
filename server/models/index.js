const { Suspense, lazy } = require("react");

// Lazily load components
const Home = lazy(() => import("./views/Home.jsx"));
const ProductEdit = lazy(() => import("./views/ProductEdit.jsx"));
const ProductListView = lazy(() => import("./views/ProductListView.jsx"));
const ProductDetail = lazy(() => import("./views/ProductDetail.jsx"));
const ShoppingCartView = lazy(() => import("./views/ShoppingCartView.jsx"));
const NotFound = lazy(() => import("./components/NotFound.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <ProductListView /> },
      { path: "/products/new", element: <ProductEdit /> },
      { path: "/products/:id", element: <ProductDetail /> },
      { path: "/cart", element: <ShoppingCartView /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
