import React from 'react';
import './App.css';
import BreakFastStore from './components/BreakFastStore/BreakFastStore';
import DinnerStore from './components/DinnerStore/DinnerStore';
import LunchStore from './components/LunchStore/LunchStore';

function App() {
  return (
    <div className="App">

      <BreakFastStore></BreakFastStore>
      <LunchStore></LunchStore>
      <DinnerStore></DinnerStore>
    </div>
  );
}

export default App;
