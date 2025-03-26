import { useState } from "react";
import api from "../services/api"; // Din axios-instans

function ProductRatingForm({ productId, onRatingSubmitted }) {
  const [value, setValue] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(`/products/${productId}/ratings`, {
        value: parseInt(value),
        comment,
      });
      setValue(0);
      setComment("");
      if (onRatingSubmitted) onRatingSubmitted(); // För att trigga uppdatering
    } catch (err) {
      console.error("Kunde inte skicka betyg:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Lämna ett betyg</h4>
      <label>
        Betyg (1–5):
        <select value={value} onChange={(e) => setValue(e.target.value)} required>
          <option value="">Välj</option>
          {[1, 2, 3, 4, 5].map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </label>
      <br />
      <textarea
        placeholder="Kommentera..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <br />
      <button type="submit">Skicka betyg</button>
    </form>
  );
}

export default ProductRatingForm;
