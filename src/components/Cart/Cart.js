import React, { useEffect, useState } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
	const [cart, setCart] = useState([]);

	//LOAD CART INFO FROM DATABASE
	useEffect(() => {
		fetch('http://localhost:4200/cart')
			.then((res) => res.json())
			.then((data) => setCart(data));
    }, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-4">
					<table className="table">
						<tbody>
							{cart.map((food) => (
								<tr key={food._id} className="table-row">
									<td>
										<img src={food.img} alt="" style={{ height: '80px' }} />
									</td>
									<td>
										<h6 className="font-weight-bold">{food.name}</h6>
										<h5 className="text-danger font-weight-bold">
											${Number(food.price * food.qty).toFixed(2)}
										</h5>
										<small className="text-secondary">Delivery free</small>
									</td>
									<td>
										<button className="btn text-secondary">
											<FontAwesomeIcon icon={faMinus} />
										</button>
										<span>0{food.qty}</span>
										<button className="btn text-secondary">
											<FontAwesomeIcon icon={faPlus} />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Cart;
