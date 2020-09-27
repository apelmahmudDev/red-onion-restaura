import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';

const FoodDetails = () => {
    const [foods, setFoods] = useState([]);
    const { foodKey } = useParams();

    //LOAD FAKEDATA OF FOODS
    useEffect(()=> {
        const allFoods = fakeData;
        setFoods(allFoods);
    },[])

    let selectedFood = foods.find(food => food.key === foodKey);

    let category, price, photo;
    if(selectedFood){
        category = selectedFood.category;
        price = selectedFood.price;
        photo = selectedFood.img;
    }

    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h1 className="font-weight-bold">Light {category}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempora corporis et esse voluptatum, vero, ipsam aspernatur, iure vel doloribus obcaecati. Cum est quibusdam alias numquam placeat repellendus tenetur eligendi?</p>
                    <h2 className="font-weight-bold">${price}</h2>
                </div>
                <div className="col-md-6">
                    <img src={photo} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;