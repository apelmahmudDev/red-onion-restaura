import React from 'react';
import './Cart.css';
import cartImage from '../../Image/adult-blur-blurred-background-687824.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
	return (
		<div className="container">
			<div className="row">
                <div className="col-md-4">
                    <table className="table">
                        <tbody>
                            <tr className="table-row">
                                <td><img src={cartImage} alt="" style={{height:'80px'}}/></td>
                                <td>
                                    <h6 className="font-weight-bold">Butter Nan</h6>
                                    <h5 className="text-danger font-weight-bold">$43</h5>
                                    <small className="text-secondary">Delivery free</small>
                                </td>
                                <td>
                                    <button className="btn text-secondary">
                                        <FontAwesomeIcon icon={faMinus}/>
                                    </button>
                                    <span>02</span>
                                    <button className="btn text-secondary">
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </button>
                                </td>
                            </tr>
                            <tr className="table-row">
                                <td><img src={cartImage} alt="" style={{height:'80px'}}/></td>
                                <td>
                                    <h6 className="font-weight-bold">Butter Nan</h6>
                                    <h5 className="text-danger font-weight-bold">$43</h5>
                                    <small className="text-secondary">Delivery free</small>
                                </td>
                                <td>
                                    <button className="btn text-secondary">
                                        <FontAwesomeIcon icon={faMinus}/>
                                    </button>
                                    <span>02</span>
                                    <button className="btn text-secondary">
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
		</div>
	);
};

export default Cart;
