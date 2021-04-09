import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { DeliverContext, FoodContext, UserContext } from '../../App';
import Loading from '../Loading/Loading';
import './Food.scss'
const Food = () => {
    const {id}=useParams()
    const [foods, setFoods] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [item,setItem] = useContext(DeliverContext)
    const [isEnabled,setIsEnabled] = useState(true)
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        fetch(`https://whispering-thicket-80285.herokuapp.com/foods/${id}`)
        .then(res=>res.json())
        .then(data=> {
            setFoods(data[0])
            setIsLoading(false)
        })
    },[])
   const {name,image,price} = foods;
    let [value,setValue]=useState(1)
    let pr=parseInt(price);
    // let [priceValue,setPriceValue] = useState(pr)
    // console.log(priceValue);
    const handleIncrease = () =>{
        value=value+1;
        pr = value*pr
        document.getElementById('price').innerText = pr
        // setPriceValue(pr);
        setValue(value);
        setItem(value)
        setIsEnabled(true)
        
}
const handleDecrease = () =>{
    if(value>0){
        value=value-1;
        pr = value*pr
        document.getElementById('price').innerText = pr
        // setPriceValue(pr);
        setValue(value);
        setItem(value)
        if(value===0){
            setIsEnabled(false)
           }
       }
       
    

}
const userOrder = {
    name:name,
    image:image,
    price:price,
    email:loggedInUser.email,
    userName:loggedInUser.name,
    Quantity:value
};
const handleOrderStore = ()=>{
    fetch('https://whispering-thicket-80285.herokuapp.com/addOrders',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userOrder)
    })
    
}
    return (
        <div>
        <div className= 'container mx-auto text-center'>
            {
                isLoading ? <Loading></Loading> : <div className='container row bg-dark mx-auto text-center mb-4 mt-4 rounded shadow'>
                         
                <div className='col-md-8 text-center  mb-md-3 mt-3' >
                <img src={image} className="w-75" alt="" srcset=""/>
                </div>
                <div className='col-md-4 d-flex flex-column justify-content-center text-md-left text-center  text-white container'  >
                <h4 className="text-white">{name}</h4>
                <div className="d-flex ml-md-2 ml-0 mr-3 justify-content-md-start  justify-content-center ml-md-0">
                <h6 className="text-white ml-3 mt-3 ml-sm-0 text-center"> $<span id='price'>{price}</span></h6>
                <button style={{width:'100px',backgroundColor:'white',border:'none'}} className='rounded mb-3 ml-3 ml-md-5 mt-3' ><FontAwesomeIcon icon={faMinus} className='mr-3' onClick={handleDecrease}></FontAwesomeIcon>{value}<FontAwesomeIcon icon={faPlus} onClick={handleIncrease} className='ml-2 text-danger'></FontAwesomeIcon></button>
                </div>
               {
                   isEnabled ? <Link to='/cart' className='text-white'><button as={Link} onClick={handleOrderStore}  className='btn btn-primary mb-3 w-75'>Add to cart</button></Link> : <Link to='/cart' className='text-white link-disable'><button as={Link} onClick={handleOrderStore}  className='btn btn-primary mb-3 w-75 disabled'>Add to cart</button></Link> 
               }
               <div className="d-flex align-items-center justify-content-center align-items-md-start justify-content-md-start mb-3">
               <img src={image} className='w-25 mt-3' alt="" srcset=""/>
               <img src={image} className='w-25 mt-3 ml-3' alt="" srcset=""/>
               </div>
                </div>
                
            </div>
            }
        </div>
        
        </div>
    );
};

export default Food;