function CartItem({ item }) {
    return (
      <div className="cart-item">
        <p>{item.product.title}</p>
        <p>Antal: {item.amount}</p>
        <p>Pris: {item.product.price} kr</p>
      </div>
    );
  }
  
  export default CartItem;
  