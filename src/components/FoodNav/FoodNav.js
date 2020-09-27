import React from 'react';
import { NavLink } from 'react-router-dom';
import './FoodNav.css';

const FoodNav = () => {
	return (
		<div className="container">
			<nav className="food__navbar">
				<NavLink
					activeClassName="food__navbar__active__link"
					className="food__navbar__link"
					to="/breakfast"
				>
					Breakfast
				</NavLink>
				<NavLink
					exact
					activeClassName="food__navbar__active__link"
					className="food__navbar__link"
					to="/"
				>
					Lunch
				</NavLink>
				<NavLink
					activeClassName="food__navbar__active__link"
					className="food__navbar__link"
					to="/dinner"
				>
					Dinner
				</NavLink>
			</nav>
		</div>
	);
};

export default FoodNav;
