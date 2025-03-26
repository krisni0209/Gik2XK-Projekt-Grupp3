import ProductList from '../components/ProductList';

// Förenklat exempel med statiska produkter
const products = [
  { id: 1, title: "Klubba", price: 999, imageUrl: "/img/klubba.jpg" },
  { id: 2, title: "Hjälm", price: 799, imageUrl: "/img/hjalm.jpg" }
];

function ProductListView() {
  return (
    <div>
      <h2>Alla produkter</h2>
      <ProductList products={products} />
    </div>
  );
}

export default ProductListView;
