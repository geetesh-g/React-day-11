import { useContext } from "react";
import { CartContext } from "../context/CartContexProvider";
import "../App.css";

function CardItem(props) {
	const { image, price, title } = props.item;
	const { handleClick } = useContext(CartContext);

	return (
		<div className="prod-item">
			<div className="img-div">
				<img src={image} alt="" />
			</div>
			<hr />
			<div className="details">
				<h3>{`${title.substring(0, 40)}...`}</h3>
				<h3>Price : {price}$</h3>
				<button onClick={() => handleClick(price)}>Add To Cart</button>
			</div>
		</div>
	);
}

export default CardItem;
