import React from 'react';
import { Link } from 'react-router-dom';
import './Lunch.css';

const Lunch = (props) => {
	const {img, name, price, key} = props.lunch;
	return (
		<Link to={`/foodDetails/food/${key}`}>
			<div class="card">
				<img
					src={img}
					class="card-img-top w-50"
					alt="..."
				/>
				<div class="card-body">
					<h6 class="card-title">{name}</h6>
					<p class="card-text text-secondary">
						How we dream about our future
					</p>
					<h5 class="card-text">
						${price}
					</h5>
				</div>
			</div>
		</Link>
	);
};

export default Lunch;
