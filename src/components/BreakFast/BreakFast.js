import React from 'react';
import { Link } from 'react-router-dom';

const BreakFast = (props) => {
	const { img, name, price, key } = props.breakFast;
	return (
		<Link className="food__details_link" to={`/foodDetails/food/${key}`}>
			<div class="col mb-4">
				<div class="card h-100">
					<img src={img} class="card-img-top w-50" alt="..." />
					<div class="card-body">
						<h6 class="card-title">{name}</h6>
						<p class="card-text text-secondary">
							How we dream about our future
						</p>
						<h5 class="card-text">${price}</h5>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BreakFast;
