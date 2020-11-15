import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Lunch from '../Lunch/Lunch';

const LunchStore = () => {
	const [lunches, setLunches] = useState([]);
	//LOAD LUNCHES FOOD
	useEffect(() => {
		const lunchFood = fakeData.filter((food) => food.category === 'lunch');
		setLunches(lunchFood);
	}, []);
	return (
		<div className="container">
			<div className="row row-cols-1 row-cols-md-3">
				{lunches.map((lunch) => (
					<Lunch key={lunch.key} lunch={lunch}></Lunch>
				))}
			</div>
		</div>
	);
};

export default LunchStore;
