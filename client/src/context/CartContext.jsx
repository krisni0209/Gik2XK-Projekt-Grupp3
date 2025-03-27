import { createContext, useContext, useState } from "react";
 
const CartContext = createContext();
 
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
 
  const addToCart = (product, quantity = 1) => {
	setCartItems((prev) => {
  	const existing = prev.find((item) => item.id === product.id);
  	if (existing) {
    	return prev.map((item) =>
      	item.id === product.id
        	? { ...item, quantity: item.quantity + quantity }
        	: item
    	);
  	} else {
    	return [...prev, { ...product, quantity }];
  	}
	});
  };
 
  const removeFromCart = (id) => {
	setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
 
  return (
	<CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
  	{children}
	</CartContext.Provider>
  );
};
 
export const useCart = () => useContext(CartContext);


