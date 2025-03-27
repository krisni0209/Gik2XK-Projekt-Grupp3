import { useState } from "react";
import { addRating } from "../services/ProductService";
 
function ProductRatingForm({ productId, onRatingSubmitted }) {
  const [value, setValue] = useState(0);
  const [comment, setComment] = useState("");
 
  const handleSubmit = async (e) => {
	e.preventDefault();
	try {
  	await addRating(productId, {
    	value: parseInt(value),
    	comment,
  	});
  	setValue(0);
  	setComment("");
  	if (onRatingSubmitted) onRatingSubmitted(); // Trigger reload in parent
	} catch (err) {
  	console.error("Kunde inte skicka betyg:", err);
	}
  };
 
  return (
	<form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
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
    	style={{ width: "100%", height: "80px", marginTop: "0.5rem" }}
  	/>
  	<br />
  	<button type="submit">Skicka betyg</button>
	</form>
  );
}
 
export default ProductRatingForm;

