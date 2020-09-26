import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import BreakFast from '../BreakFast/BreakFast';

const BreakFastStore = () => {
    const [breakFasts, setBreakFasts] = useState([]);
    //LOAD breakFastES FOOD
    useEffect(() => {
        const breakFastFood = fakeData.filter(food => food.category === 'breakfast');
        setBreakFasts(breakFastFood);
    },[])
    return (
        <div className="container">
          <div className="card-deck">
            {
               breakFasts.map(breakFast => <BreakFast breakFast={breakFast}></BreakFast>)
            }
          </div>
        </div>
    );
};

export default BreakFastStore;