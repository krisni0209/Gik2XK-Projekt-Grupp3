import { useState } from "react";
import { addRating } from "../services/ProductService";
 
function ProductRatingForm({ productId, onRatingSubmitted }) {
  const [value, setValue] = useState("");
  const [comment, setComment] = useState("");
 
  const handleSubmit = async (e) => {
	e.preventDefault();
	try {
  	await addRating(productId, {
    	value: parseInt(value),
    	comment,
  	});
  	setValue("");
  	setComment("");
  	if (onRatingSubmitted) onRatingSubmitted();
	} catch (err) {
  	console.error("Kunde inte skicka betyg:", err);
	}
  };
 
  return (
	<form onSubmit={handleSubmit}>
  	<h4>Lämna ett betyg</h4>
  	<label>
    	Betyg (1–5):
    	<select
      	value={value}
      	onChange={(e) => setValue(e.target.value)}
      	required
    	>
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
