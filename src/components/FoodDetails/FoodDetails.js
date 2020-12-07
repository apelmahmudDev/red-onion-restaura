import React, { useEffect, useState } from 'react';
import './FoodDetails.css';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCartPlus,
	faCheck,
	faMinus,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';

const FoodDetails = () => {
	const [cart, setCart] = useState([]);
	const [isFoodAdd, setIsFoodAdd] = useState(false);
	const [quantity, setQuantity] = useState(1);
	const [foods, setFoods] = useState([]);
	const { foodKey } = useParams();

	//LOAD FAKEDATA OF FOODS
	useEffect(() => {
		const allFoods = fakeData;
		setFoods(allFoods);
	}, []);

	let selectedFood = foods.find((food) => food.key === foodKey);

	let name, price, photo;
	if (selectedFood) {
		name = selectedFood.name;
		price = selectedFood.price;
		photo = selectedFood.img;
	}
	//LOAD CART INFO FROM DATABASE
	useEffect(() => {
		fetch('http://localhost:4200/cart')
			.then((res) => res.json())
			.then((data) => setCart(data));
	}, []);

	const matchedFood = cart.find((food) => food.key === foodKey);
	let hanldeAddFood;
	if (!matchedFood) {
		hanldeAddFood = () => {
			// user will be send with food details from here
			const newAddToCart = selectedFood;
			newAddToCart.qty = quantity;
			fetch('http://localhost:4200/addToCart', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newAddToCart),
			})
				.then((res) => res.json())
				.then((result) => setIsFoodAdd(result));
		};
	}

	return (
		<div className="container">
			<div className="row d-flex align-items-center">
				<div className="col-md-6">
					<h1 className="font-weight-bold">{name}</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						tempora corporis et esse voluptatum, vero, ipsam aspernatur, iure
						vel doloribus obcaecati. Cum est quibusdam alias numquam placeat
						repellendus tenetur eligendi?
					</p>
					<div className="d-flex align-items-center">
						<h2>${Number(price * quantity).toFixed(2)}</h2>
						<div className="ml-3 quantity">
							<button
								onClick={() => setQuantity(Math.max(quantity - 1, 1))}
								className="btn text-secondary"
							>
								<FontAwesomeIcon icon={faMinus} />
							</button>
							<span id="quantity">{quantity}</span>
							<button
								onClick={() => setQuantity(quantity + 1)}
								className="btn text-secondary"
							>
								<FontAwesomeIcon icon={faPlus} />
							</button>
						</div>
					</div>
					<div className="d-flex align-items-center">
						<button
							disabled={isFoodAdd}
							onClick={hanldeAddFood}
							className="btn btn-danger main-button mt-3"
						>
							<FontAwesomeIcon icon={faCartPlus} className="mr-2" />
							Add
						</button>
						{isFoodAdd && (
							<p className="mt-4 ml-3 text-success">
								<FontAwesomeIcon icon={faCheck} className="mr-2" />
								Food add to cart successfully
							</p>
						)}
						{matchedFood && (
							<p className="mt-4 ml-3 text-danger">
								<FontAwesomeIcon icon={faCheck} className="mr-2" />
								The Food already added to the cart
							</p>
						)}
					</div>
				</div>
				<div className="col-md-6">
					<img src={photo} alt="" className="img-fluid" />
				</div>
			</div>
		</div>
	);
};

export default FoodDetails;
