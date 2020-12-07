import React, { useEffect, useState } from 'react';
import './Cart.css';
import CartInfo from '../CartInfo/CartInfo';

const Cart = () => {
	const [cart, setCart] = useState([]);
	console.log(cart.length);

	//LOAD CART INFO FROM DATABASE
	useEffect(() => {
		fetch('http://localhost:4200/cart')
			.then((res) => res.json())
			.then((data) => setCart(data));
	}, []);

	const styles = {
		scroll: {
			height: '320px',
			overflow: 'scroll',
			scrollBehavior: 'smooth',
		},
		placebtn: {
			width: '100%',
		}
	};
	return (
		<>
			{cart.length === 0 ? <h5 className="text-danger">Your food's cart currently empty!</h5>:
				<div>
				<p>From <strong>Gulshan Plaza Restara GPR</strong></p>
				<small>Arriving in 20-30 min</small>
				<p>107 Rd No 8</p>
				<div>
					<table className="table">
						<tbody>
							{cart.map((food) => (
								<CartInfo food={food} key={food.key}></CartInfo>
							))}
						</tbody>
					</table>
				</div>
				<div className="mt-4">
					<div className="d-flex justify-content-between">
						<p>Subtotal * 4 item</p>
						<p>$320.00</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>Tax</p>
						<p>$5.00</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>Delivery fee</p>
						<p>$2.00</p>
					</div>
					<div className="d-flex justify-content-between">
						<p><strong>Total</strong></p>
						<p>$327.00</p>
					</div>
					<button
						className="btn bg-secondary text-light my-3"
						style={styles.placebtn}
					>
						Place Order
					</button>
				</div>
			</div>}
		</>
	);
};

export default Cart;
