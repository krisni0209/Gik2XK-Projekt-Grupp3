import ProductForm from '../components/ProductForm';

function ProductEdit() {
  const handleSubmit = (formData) => {
    console.log("Spara produkt:", formData);
    // TODO: Skicka till backend med fetch/axios
  };

  return (
    <div>
      <h2>Redigera / Skapa produkt</h2>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
}

export default ProductEdit
