import React from 'react';
import { NavLink } from 'react-router-dom';
import './FoodNav.css';

const FoodNav = ({ setCategory }) => {
	const categoryHandler = (category) => {
		setCategory(category);
	};
	return (
		<div className="container">
			<nav className="food__navbar">
				<NavLink
					onClick={() => categoryHandler('breakfast')}
					activeClassName="food__navbar__active__link"
					className="food__navbar__link"
					to="/breakfast"
				>
					Breakfast
				</NavLink>
				<NavLink
					onClick={() => categoryHandler('lunch')}
					activeClassName="food__navbar__active__link"
					className="food__navbar__link"
					to="/lunch"
				>
					Lunch
				</NavLink>
				<NavLink
					onClick={() => categoryHandler('dinner')}
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
