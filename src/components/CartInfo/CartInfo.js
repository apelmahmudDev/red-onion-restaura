import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const CartInfo = ({ food }) => {

	return (
		<tr key={food._id} className="table-row">
			<td>
				<img src={food.img} alt="" style={{ height: '80px' }} />
			</td>
			<td>
				<h6 className="font-weight-bold">{food.name}</h6>
				<h5 id="price" className="text-danger font-weight-bold">
					${food.price}
				</h5>
				<small className="text-secondary">Delivery free</small>
			</td>
			<td>
				<button
					className="btn text-secondary">
					<FontAwesomeIcon icon={faMinus} />
				</button>
				<span>{food.qty}</span>
				<button 
					
					className="btn text-secondary">
					<FontAwesomeIcon icon={faPlus} />
				</button>
			</td>
		</tr>
	);
};

export default CartInfo;
