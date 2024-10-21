import { useEffect, useState } from "react";
import CardItem from "./CarItem";

const baseURL = "https://fakestoreapi.com/products";
const fetchData = () => {
	return fetch(`${baseURL}`).then((res) => {
		if (res.ok) {
			return res.json();
		} else {
			alert(`Something Went Wrong Server Responded with ${res.status} code`);
		}
	});
};

function Main() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			setLoading(true);
			const data = await fetchData();
			setProducts(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(true);
		}
	};

	return (
		<div className="prod-list">
			{loading ? (
				<h1>Loading...</h1>
			) : error ? (
				<h1>Something Went Wrong</h1>
			) : products.length < 0 ? (
				<h1>Product List is empty</h1>
			) : (
				products.map((item) => {
					return <CardItem key={item.id} item={item} />;
				})
			)}
		</div>
	);
}

export default Main;
