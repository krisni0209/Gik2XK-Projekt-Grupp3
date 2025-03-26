function CartItem({ item }) {
  return (
	<div className="cart-item">
  	<h4>{item.title}</h4>
  	<p>Antal: {item.amount}</p>
  	<p>Pris: {item.price} kr</p>
	</div>
  );
}
 
export default CartItem;

  