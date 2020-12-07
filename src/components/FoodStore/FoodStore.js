import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import FoodNav from '../FoodNav/FoodNav';
import Foods from '../Foods/Foods';

const FoodStore = () => {
	const [foods, setFoods] = useState([]);
	const [category, setCategory] = useState('lunch');

	//Load foodData from fakeData
	useEffect(() => {
		setFoods(fakeData);
	}, []);
	const foodsByCategory = foods.filter((foods) => foods.category === category);

	return (
		<div className="container">
			<FoodNav setCategory={setCategory}></FoodNav>
			<div className="row row-cols-1 row-cols-md-3">
				{foodsByCategory.map((food) => (
					<Foods food={food} key={food.key}></Foods>
				))}
			</div>
		</div>
	);
};

export default FoodStore;
