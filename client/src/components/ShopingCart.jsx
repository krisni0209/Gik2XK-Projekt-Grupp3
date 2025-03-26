function ShopingCart({ items }) {
  const total = items.reduce((sum, i) => sum + i.price * i.amount, 0);
 
  return (
	<div>
  	{items.map(item => (
    	<CartItem key={item.id} item={item} />
  	))}
  	<h3>Totalt: {total} kr</h3>
	</div>
  );
}
 
export default ShopingCart;

