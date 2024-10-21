import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState(0);
	const handleClick = (value) => {
		console.log(value);
		setCart(cart + 1);
	};
	return (
		<CartContext.Provider value={{ cart, handleClick }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
