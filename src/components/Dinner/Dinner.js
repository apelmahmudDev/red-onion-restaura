import React from 'react';

const Dinner = (props) => {
    const {img, name, price} = props.dinner;
	return (
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
    );
};

export default Dinner;