import { useContext } from "react";
import { CartContext } from "../context/CartContexProvider";
import "../App.css";

function Navbar() {
	const { cart } = useContext(CartContext);
	console.log(cart);
	return (
		<div className="nav">
			<span className="material-symbols-outlined">menu</span>

			<span className="material-symbols-outlined">home</span>

			<span className="material-symbols-outlined">search</span>

			<span className="material-symbols-outlined">
				shopping_cart : <span>{cart} Item</span>
			</span>

			<span className="material-symbols-outlined">account_circle</span>
		</div>
	);
}

export default Navbar;
