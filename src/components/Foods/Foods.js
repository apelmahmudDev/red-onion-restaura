import React from 'react';
import { Link } from 'react-router-dom';

const Foods = ({ food }) => {
	return (
		<Link className="food__details_link" to={`/foodDetails/food/${food.key}`}>
			<div className="col mb-4">
				<div className="card h-100">
					<img src={food.img} className="card-img-top w-50" alt="foodImage" />
					<div className="card-body">
						<h6 className="card-title">{food.name}</h6>
						<p className="card-text text-secondary">
							How we dream about our future
						</p>
						<h5 className="card-text">${food.price}</h5>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Foods;
