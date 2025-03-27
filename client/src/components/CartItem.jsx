function CartItem({ item, onRemove }) {
	return (
	  <div className="cart-item" style={{ background: "#fff", padding: "1rem", border: "1px solid #ddd", marginBottom: "1rem" }}>
		<h4>{item.title}</h4>
		<p>Pris: {item.price} kr</p>
		<p>Antal: {item.quantity}</p>
		<p>Delsumma: {item.price * item.quantity} kr</p>
		{onRemove && (
		  <button onClick={() => onRemove(item.id)}>Ta bort</button>
		)}
	  </div>
	);
  }
   
  export default CartItem;
  
  