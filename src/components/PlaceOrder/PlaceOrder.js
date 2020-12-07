import React from 'react';
import Cart from '../Cart/Cart';
import CustomerForm from '../CustomerForm/CustomerForm';

const PlaceOrder = () => {
	return (
		<div className="container">
			<div className="row d-flex justify-content-between">
				<div className="col-md-6">
					<CustomerForm></CustomerForm>
				</div>
				<div className="col-md-5">
					<Cart></Cart>
				</div>
			</div>
		</div>
	);
};

export default PlaceOrder;
