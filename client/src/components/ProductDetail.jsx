import { useParams } from 'react-router-dom';
import ProductItemLarge from './ProductItemLarge';
import Rating from './Rating';

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Produkten hittades inte.</p>;

  return (
    <>
      <ProductItemLarge product={product} />
      <Rating productId={product.id} />
    </>
  );
}

export default ProductDetail;


