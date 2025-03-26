import ProductList from '../components/ProductList';
import { useState } from 'react';

function ProductListView() {
  const [products, setProducts] = useState([
    { id: 1, title: 'Hockeyklubba', price: 999, description: 'Proffsklubba' },
    { id: 2, title: 'Skydd', price: 599, description: 'Axelskydd junior' },
    { id: 3, title: 'CCM Hjälm', price: 799, description: 'Skyddande hjälm' }
  ]);

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(p => p.id !== productId);
    setProducts(updatedProducts);
  };

  return <ProductList products={products} onDelete={handleDelete} />;
}

export default ProductListView;


