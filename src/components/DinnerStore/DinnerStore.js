import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Dinner from '../Dinner/Dinner';

const DinnerStore = () => {
    const [dinners, setDinners] = useState([]);
    //LOAD LUNCHES FOOD
    useEffect(() => {
        const dinnerFood = fakeData.filter(food => food.category === 'Dinner');
        setDinners(dinnerFood);
    },[])
    return (
        <div className="container">
          <div className="card-deck">
            {
               dinners.map(dinner => <Dinner dinner={dinner}></Dinner>)
            }
          </div>
        </div>
    );
};

export default DinnerStore;