import React from 'react';
import { Link } from 'react-router-dom';

const Dinner = (props) => {
	const { img, name, price, key } = props.dinner;
	return (
		<Link className="food__details_link" to={`/foodDetails/food/${key}`}>
			<div className="col mb-4">
				<div className="card h-100">
					<img src={img} className="card-img-top w-50" alt="foodImage" />
					<div className="card-body">
						<h6 className="card-title">{name}</h6>
						<p className="card-text text-secondary">
							How we dream about our future
						</p>
						<h5 className="card-text">${price}</h5>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Dinner;
