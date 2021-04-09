import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalculateContext, DeliverContext, FoodContext, OrderPlaceContext, UserContext } from '../../App';
import Loading from '../Loading/Loading';
import LoadingTable from '../LoadingTable/LoadingTable';
import Deliver from './Deliver';
import './DeliveryDetails.scss'
const DeliveryDetails = () => {
    const [food, setFood] = useContext(FoodContext)
    const [item, setItem] = useContext(DeliverContext)
    const [orders, setOrders] = useContext(OrderPlaceContext)
    const { image, name, price } = food
    const [details, setDetails] = useState({
        road: '107 no road',
        house: '',
        flat: '',
        additional: '',
        time: ''

    })
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [fullOrders, setFullOrders] = useState([])
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://whispering-thicket-80285.herokuapp.com/orders')
            .then(response => response.json())
            .then(data => {
                setFullOrders(data)
                setLoading(false)
            })

    })
    const itemOrders = fullOrders.filter(or => or.email === loggedInUser.email)
    const [save, setSave] = useState(false)
    let total = 0;
    let tax = 0;
    let payTotal = 0;
    for (let i = 0; i < itemOrders.length; i++) {
        total = total + parseInt(itemOrders[i].price) * itemOrders[i].Quantity
        const totalTax = total * .1
        tax = totalTax.toFixed(2)
        payTotal = total + parseInt(tax)
    }

    const pay = payTotal
    const handleChange = (event) => {
        if (event.target.name === 'road') {
            const newDetails = { ...details }
            newDetails.road = event.target.value
            setDetails(newDetails)
            setOrders(newDetails)
        }
        if (event.target.name === 'flat') {
            const newDetails = { ...details }
            newDetails.flat = event.target.value
            setDetails(newDetails)
            setOrders(newDetails)
        }
        if (event.target.name === 'additional') {
            const newDetails = { ...details }
            newDetails.additional = event.target.value
            setDetails(newDetails)
            setOrders(newDetails)
        }
        if (event.target.name === 'house') {
            const newDetails = { ...details }
            newDetails.house = event.target.value
            setDetails(newDetails)
            setOrders(newDetails)
        }
    }
    const saveAddress = () => {
        if (details.house && details.road && details.flat && details.additional) {
            setSave(true)
            setButtonDisabled(false)
        }
    }
    const handleOrderPlace = () => {
        const time = new Date()
        const newTime = time.getHours() + ':' + time.getMinutes()
        const newDetails = { ...details }
        newDetails.time = newTime
        setDetails(newDetails)
        setOrders(newDetails)
        fetch(`https://whispering-thicket-80285.herokuapp.com/deleteAll/${loggedInUser.email}`, {
            method: 'DELETE'
        })

    }
    return (
        <div >
            {
                loading ?<div className='text-center mt-5'>
                     <Loading></Loading>
                </div>:<div className='row ml-md-3 ml-0 ml-3 mr-3 '>
                <div className="col-md-7 text-center mt-5 form ">
                    <h3 className='text-left'>Edit Delivery Details</h3>
                    <hr />
                    <input type="text" placeholder='House Name' name='house' onChange={handleChange} className='w-75 ml-md-5 ml-0 rounded input mt-1' /><br />
                    <input type="text" placeholder='Road Number' name='road' onChange={handleChange} className='w-75 ml-md-5 ml-0 mt-2 rounded input' /><br />
                    <input type="text" placeholder='Flat No.' name='flat' onChange={handleChange} className='w-75 ml-md-5 ml-0 mt-2 rounded input' /><br />
                    <input type="text" placeholder='Aditional Information' name='additional' onChange={handleChange} className='w-75 ml-md-5 ml-0 mt-2 rounded input' /><br />
                    {
                        save && <p className='text-center text-success'>Successfully Added</p>
                    }
                    <button className='btn btn-danger mt-3 mb-4' onClick={saveAddress}>Save and Continue</button>
                </div>
                <div className="col-md-5 ">
                    <div className="ml-3 bg-white mt-5 pb-3 mb-3 mb-md-0 pt-3 rounded shadow">
                        <h6 className='ml-4 '>From Gulshan Plaza</h6>
                        <p className='ml-4'>Arriving in 20-30 min </p>
                        <p className='ml-4'>  {details.house}  {details.flat} {details.road} {details.additional}</p>
                        {
                            itemOrders.map(food => <Deliver food={food}></Deliver>)
                        }
                        <div className="ml-0 mr-5 text-center">
                            <h5 className="tax">Tax   <span className="ml-5">${tax}</span></h5>
    
                            <h4 className='mr-2 total'>Total <span className="ml-4">${payTotal}</span></h4>
                            {
                                buttonDisabled && <p className='text-danger'>* First fill the address correctly</p>
                            }
                            {
                                buttonDisabled ? <Link to='/orders' className='text-white link-disable'><button as={Link} to='/orders' className='btn btn-danger mt-0 disabled' onClick={handleOrderPlace}>Order Place</button></Link> : <Link to='/orders' className='text-white'><button as={Link} to='/orders' className='btn btn-danger mt-0' onClick={handleOrderPlace}>Order Place</button></Link>
                            }
                        </div>
                    </div>
    
                </div>
            </div>
            }
        </div>
    );
};

export default DeliveryDetails;