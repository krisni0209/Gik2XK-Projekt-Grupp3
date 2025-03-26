import { useState } from 'react';

function Rating({ productId }) {
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    // skicka rating till backend
    fetch(`/api/products/${productId}/addRating`, {
      method: 'POST',
      body: JSON.stringify({ rating }),
      headers: { 'Content-Type': 'application/json' }
    });
  };

  return (
    <div>
      <p>Betyg: </p>
      <input type="number" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)} />
      <button onClick={handleSubmit}>Skicka betyg</button>
    </div>
  );
}

export default Rating;
