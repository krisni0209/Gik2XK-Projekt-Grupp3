import { useCart } from "../context/CartContext";

function ShoppingCartView() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>🛒 Din varukorg</h2>
      {cartItems.length === 0 ? (
        <p>Varukorgen är tom.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ background: "#fff", marginBottom: "1rem", padding: "1rem", border: "1px solid #ddd" }}>
              <h3>{item.title}</h3>
              <p>Pris per styck: {item.price} kr</p>
              <p>Antal: {item.quantity}</p>
              <p>Delsumma: {item.price * item.quantity} kr</p>
              <button onClick={() => removeFromCart(item.id)}>Ta bort</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Totalt att betala: {total} kr</h3>
    </div>
  );
}

export default ShoppingCartView;
