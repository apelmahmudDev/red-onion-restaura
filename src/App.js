import React from 'react';
import './App.css';
import BreakFastStore from './components/BreakFastStore/BreakFastStore';
import DinnerStore from './components/DinnerStore/DinnerStore';
import LunchStore from './components/LunchStore/LunchStore';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FoodNav from './components/FoodNav/FoodNav';
import FoodDetails from './components/FoodDetails/FoodDetails';

function App() {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;
