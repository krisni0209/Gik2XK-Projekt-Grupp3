function ProductForm({ product, onChange, onSubmit }) {
  return (
	<form onSubmit={onSubmit}>
  	<input name="title" value={product.title} onChange={onChange} placeholder="Titel" required />
  	<textarea name="description" value={product.description} onChange={onChange} placeholder="Beskrivning" />
  	<input name="price" type="number" value={product.price} onChange={onChange} placeholder="Pris" />
  	<input name="imageUrl" value={product.imageUrl} onChange={onChange} placeholder="Bild-URL" />
  	<button type="submit">Spara</button>
</form>
  );
}
 
export default ProductForm;
