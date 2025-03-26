import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';

function ProductEdit() {
  const { id } = useParams(); // fångar /products/:id/edit
  const [product, setProduct] = useState(null);

  // ✅ MOCKDATA – ersätt detta med fetch om du vill koppla till backend
  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        title: 'Hockeyklubba Bauer Vapor',
        price: 1299,
        description: 'Lättviktsklubba för fartfylld spelstil',
        imageUrl: ''
      },
      {
        id: 2,
        title: 'Hockeyhjälm CCM',
        price: 799,
        description: 'Skyddande hjälm för juniorer',
        imageUrl: ''
      }
    ];

    const foundProduct = mockProducts.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  // ✅ Om produkten inte hittas eller laddas
  if (!product) {
    return <p>Laddar produktdata...</p>;
  }

  // ✅ Skickas när formuläret sparas
  const handleSubmit = (updatedProduct) => {
    console.log('Uppdaterad produkt:', updatedProduct);

    // TODO: Skicka till backend istället för console.log
    /*
    fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct)
    })
    .then(res => res.json())
    .then(data => console.log("Uppdaterad i backend:", data));
    */
  };

  return (
    <div>
      <h2>Redigera produkt</h2>
      <ProductForm initialProduct={product} onSubmit={handleSubmit} />
    </div>
  );
}

export default ProductEdit;

