import ShopingCart from '../components/ShopingCart';

// Testdata
const cartItems = [
  {
    id: 1,
    amount: 2,
    product: { title: "Klubba", price: 999 }
  },
  {
    id: 2,
    amount: 1,
    product: { title: "Hjälm", price: 799 }
  }
];

function ShoppingCartView() {
  return (
    <div>
      <h2>Din varukorg</h2>
      <ShopingCart cartItems={cartItems} />
    </div>
  );
}

export default ShoppingCartView;
