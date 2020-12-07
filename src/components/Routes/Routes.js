import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Cart from '../Cart/Cart';
import FoodDetails from '../FoodDetails/FoodDetails';
import FoodStore from '../FoodStore/FoodStore';
import Header from '../Header/Header';
import PlaceOrder from '../PlaceOrder/PlaceOrder';

const Routes = () => {
	return (
		<Router>
			<Header></Header>
			<Switch>
				<Route exact path="/">
					<FoodStore />
				</Route>
				<Route exact path="/breakfast">
					<FoodStore />
				</Route>
				<Route exact path="/lunch">
					<FoodStore />
				</Route>
				<Route exact path="/dinner">
					<FoodStore />
				</Route>
				<Route path="/foodDetails/food/:foodKey">
					<FoodDetails />
				</Route>
				<Route path="/place_order">
					<PlaceOrder />
				</Route>
				<Route path="*">
					<h2 className="text-center text-danger mt-5 font-weight-bold">
						Not found the page
					</h2>
				</Route>
			</Switch>
		</Router>
	);
};

export default Routes;
