import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { HideContext } from '../../../App';
import Cart from '../../Cart/Cart';
import Loading from '../../Loading/Loading';
import Lunch from '../../Lunch/Lunch';
import Resturant from '../../Resturant/Resturant';

const Home = () => {
    const [foods, setFoods] = useState([])
    const [isHide,setIsHide] = useContext(HideContext)
    const [isLoading,setIsLoading]=useState(true)
    useEffect(() => {
        fetch('https://whispering-thicket-80285.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => {
                setFoods(data)
                setIsLoading(false)
            })
    })
    const lunchFood = foods.filter(fd => fd.category === 'Lunch')
    return (
        <div className='container text-center mx-auto mt-5'>
            {
                isLoading && <Loading></Loading>
            }



            <div className='row container mx-auto mt-4'>

                { isHide &&
                    lunchFood.map(food => <Lunch key={food._id} food={food}></Lunch>)
                }
                <Resturant></Resturant>
            </div>
        </div>
    );
};

export default Home;