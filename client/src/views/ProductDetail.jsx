import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

// Samma mockdata som i ProductListView
const products = [
  { id: 1, title: "Klubba", price: 999, imageUrl: "/img/klubba.jpg", description: "Proffsklubba" },
  { id: 2, title: "Hjälm", price: 799, imageUrl: "/img/hjalm.jpg", description: "Säker hjälm" }
];

function ProductDetailView() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Produkten hittades inte.</p>;

  return <ProductDetail product={product} />;
}

export default ProductDetailView;
