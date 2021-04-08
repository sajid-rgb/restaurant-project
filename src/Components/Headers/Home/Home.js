import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContent } from '../../../App';
import Cart from '../../Cart/Cart';
import Lunch from '../../Lunch/Lunch';
import Resturant from '../../Resturant/Resturant';

const Home = () => {
    const [foods, setFoods] = useState([])
    const [count,setCount ]= useContext(UserContent)
    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    })
    const lunchFood = foods.filter(fd=>fd.category === 'Lunch')
    const handleCart = (item) => {
        const newCount = [...count,item]
        localStorage.setItem('key',JSON.stringify(newCount))
        setCount(newCount)
        
    }
    return (
        <div className='container'>
            

            <div className='row container mx-auto mt-4'>

                {
                    lunchFood.map(food => <Lunch key={food._id} food={food} handleCart={handleCart}></Lunch>)
                }
                <Resturant></Resturant>
            </div>
        </div>
    );
};

export default Home;