import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { OrderPlaceContext } from '../../App';
import pic from '../../images/Group 1151.png'
import Map from '../Map/Map';
const DeliveryPlace = () => {
    const [orders, setOrders] = useContext(OrderPlaceContext)
    const {road,flat,additional,house,time} = orders
    const [rider,setRider] = useState('Hamim')
    const user = ['Hamim','Tamim','Sharif','Lokman','Shafi','Shahed','Rabiul','Usman','Rakib','James']
    const number = Math.floor(Math.random()*10);
    for(let i=0;i<number;i++){
        setRider(user[i])

    }
    return (
        <div className='row container mx-md-auto '>
            <div className="col-md-7 mt-5 " >
             <div className="mr-md-5 mr-0">
             <Map></Map>
             </div>
            </div>
            <div className="col-md-5 ml-3 ml-md-0 bg-white mt-5">
               <div className="text-center">
               <img src={pic} className='w-50 mt-2' alt="" srcset=""/>
               </div>
              <p className='text-dark mt-3'>Location: House name-{house}, Road no-{road}, Flat no-{flat}, {additional}</p>
              <h3 className='text-dark mt-3'>Resturant Gulshan Plaza 1214</h3>
              <h1 className='mt-3'>{time}</h1>
              <p className='text-muted'>Estimated delivery time</p>
              <div className='bg-success text-center mb-3'>
                  <h4>{rider}</h4>
                  <p className=' text-white mb-3'>Your Rider</p>
              </div>
              <Link to='/calling' className='text-white'>
              <button className='btn btn-danger w-100 mb-3'>Contact</button>
              </Link>
            </div>
            
        </div>
    );
};

export default DeliveryPlace;