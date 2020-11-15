import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import BreakFast from '../BreakFast/BreakFast';

const BreakFastStore = () => {
	const [breakFasts, setBreakFasts] = useState([]);
	//LOAD breakFastES FOOD
	useEffect(() => {
		const breakFastFood = fakeData.filter(
			(food) => food.category === 'breakfast'
		);
		setBreakFasts(breakFastFood);
	}, []);
	return (
		<div className="container">
			<div className="row row-cols-1 row-cols-md-3">
				{breakFasts.map((breakFast) => (
					<BreakFast breakFast={breakFast} key={breakFast.key}></BreakFast>
				))}
			</div>
		</div>
	);
};

export default BreakFastStore;
