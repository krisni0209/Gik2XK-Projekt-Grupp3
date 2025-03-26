import CartItem from './CartItem';

function ShopingCart({ cartItems }) {
  return (
    <div>
      <h2>Din varukorg</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ShopingCart;
