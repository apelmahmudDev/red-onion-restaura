import React, { useEffect, useState } from 'react';
import './FoodDetails.css';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const FoodDetails = () => {
	const [quantity, setQuantity] = useState(1);
	const [foods, setFoods] = useState([]);
	const { foodKey } = useParams();

	//LOAD FAKEDATA OF FOODS
	useEffect(() => {
		const allFoods = fakeData;
		setFoods(allFoods);
	}, []);

	let selectedFood = foods.find((food) => food.key === foodKey);

	let category, price, photo;
	if (selectedFood) {
		category = selectedFood.category;
		price = selectedFood.price;
		photo = selectedFood.img;
	}

	return (
		<div className="container">
			<div className="row d-flex align-items-center">
				<div className="col-md-6">
					<h1 className="font-weight-bold">Light {category}</h1>
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
					<button className="btn btn-danger main-button mt-3">
						<FontAwesomeIcon icon={faCartPlus} className="mr-2" />
						Add
					</button>
				</div>
				<div className="col-md-6">
					<img src={photo} alt="" className="img-fluid" />
				</div>
			</div>
		</div>
	);
};

export default FoodDetails;
