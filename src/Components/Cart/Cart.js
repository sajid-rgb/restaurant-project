import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import LoadingTable from '../LoadingTable/LoadingTable';
import CartItem from './CartItem';
import './CartItem.scss'
const Cart = ({ count }) => {
    // const total = count.reduce((cr,t)=>parseInt(cr.price)+t,0)
    // console.log(count);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [fullOrders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://whispering-thicket-80285.herokuapp.com/orders')
            .then(response => response.json())
            .then(data => {
                setOrders(data)
                setLoading(false)
            })

    })
    const orders = fullOrders.filter(or => or.email === loggedInUser.email)
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
        total = total + orders[i].Quantity * parseInt(orders[i].price)
    }


    return (
        <div style={{ backgroundColor: 'white', height: '100vh' }}>
            {
                loading ? <LoadingTable></LoadingTable>:<div >
                {
                    orders.length > 0 && <tr className='d-flex justify-content-between mx-auto ml-5 container'>
                        <th className='w-100'>Name</th>
                        <th className='w-100'>Quantity</th>
                        <th className='w-50'>Price</th>
                    </tr>
                }
                <div className="container">
                    {
                        orders.map(order => <CartItem carts={order}></CartItem>)
                    }
                    {
                        total > 0 ? <div className='container text-center'>
                            <hr style={{ color: 'blue', fontWeight: 'bold' }} />
                            <h5 className='text-right text-danger total' >TOTAL={total}</h5>
                            <Link to='/delivery' className='text-dark'>
                                <button className='btn btn-success text-white total w-50 mt-4'>
                                    Confirm
                    </button>
                            </Link>
                        </div> : <h4 className='text-center text-danger'>Are you hungry? Please Browse your favorite Food <br />
                            <Link to='home' className='text-white'>
                                <button className='btn text-white mt-3' style={{ backgroundColor: 'blue' }} as={Link} to='/home'>Browse</button>
                            </Link>
                        </h4>
                    }
                </div>
            </div>
            }

            
        </div>
    );
};

export default Cart;