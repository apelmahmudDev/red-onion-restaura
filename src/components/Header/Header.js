import React from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link class="navbar-brand" to="/">
					Red Onion
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav ml-auto">
						<Link class="nav-item nav-link" to="/cart">
                        <div className="d-flex align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faShoppingCart} /> <span class="sr-only"></span>
                            <p>1</p>
                        </div>
						</Link>
						<Link class="nav-item nav-link" to="/login">
							Login
						</Link>
						<Link class="nav-item nav-link" to="/signup">
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
