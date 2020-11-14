import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import BreakFastStore from '../BreakFastStore/BreakFastStore';
import DinnerStore from '../DinnerStore/DinnerStore';
import FoodDetails from '../FoodDetails/FoodDetails';
import FoodNav from '../FoodNav/FoodNav';
import Header from '../Header/Header';
import LunchStore from '../LunchStore/LunchStore';

const Routes = () => {
	return (
		<Router>
			<Header></Header>
			<FoodNav></FoodNav>
			<Switch>
				<Route path="/breakfast">
					<BreakFastStore></BreakFastStore>
				</Route>
				<Route exact path="/">
					<LunchStore></LunchStore>
				</Route>
				<Route path="/lunch">
					<LunchStore></LunchStore>
				</Route>
				<Route path="/dinner">
					<DinnerStore></DinnerStore>
				</Route>
				<Route path="/foodDetails/food/:foodKey">
					<FoodDetails></FoodDetails>
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
