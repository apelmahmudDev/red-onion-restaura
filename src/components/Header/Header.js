import React from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link className="navbar-brand" to="/">
					Red Onion
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ml-auto">
						<Link className="nav-item nav-link" to="/place_order">
							<div className="d-flex align-items-center justify-content-center">
								<FontAwesomeIcon icon={faShoppingCart} />{' '}
								<span className="sr-only"></span>
								<p>1</p>
							</div>
						</Link>
						<Link className="nav-item nav-link" to="/login">
							Login
						</Link>
						<Link className="nav-item nav-link" to="/signup">
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
