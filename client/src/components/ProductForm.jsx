import { useState } from 'react';

function ProductForm({ onSubmit, initialProduct }) {
  const [formData, setFormData] = useState(
    initialProduct || { title: '', description: '', price: 0, imageUrl: '' }
  );

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Titel" />
      <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Bild-URL" />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Beskrivning" />
      <input name="price" type="number" value={formData.price} onChange={handleChange} />
      <button type="submit">Spara</button>
    </form>
  );
}

export default ProductForm;
