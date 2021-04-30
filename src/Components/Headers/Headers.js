import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HideContext, UserContext } from '../../App';
import './Header.scss'
const Headers = () => {
    const [count,setCount] = useContext(HideContext)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [fullOrders,setOrders] = useState([])
    const [order,setOrder] = useState([])
    
    useEffect(() => {
        fetch('https://whispering-thicket-80285.herokuapp.com/orders')
        .then(response => response.json())
        .then(data =>setOrders(data))

    })
    const orders = fullOrders.filter(or=>or.email===loggedInUser.email)
    const handleSignOut=()=>{
        setLoggedInUser({})
        localStorage.removeItem('token')
        localStorage.removeItem('login')
        localStorage.removeItem('email')


    }
    return (
        <div className='bg-white'>
            <Navbar className="d-flex justify-content-between" expand="lg">
           
                <Navbar.Brand as={Link} to='/home' className='brand-full'><span className="brand">KHIDA</span> LAGSE <p>Restaurant</p></Navbar.Brand>
                <div>
                <Link to='/cart' className='ml-5'>
                   <FontAwesomeIcon icon={faShoppingCart} className='mt-3 mr-1 text-dark'></FontAwesomeIcon>{
                       orders.length > 0 && <span  className='mt-2 text-dark'>{orders.length}</span>
                   }
                   </Link>
                   <Link to='/home'>
                       <FontAwesomeIcon icon={faHeart} className='text-dark ml-3'></FontAwesomeIcon>
                   </Link>
               
                </div>
                   
                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
  <Nav > 
  <Navbar.Collapse id="basic-navbar-nav"> 
               <Nav.Link as={Link} to='/home' className="home"><span>Home</span></Nav.Link> 
                <Nav.Link as={Link} to='/admin' className="admin disabled" >Admin</Nav.Link>
                {
                    loggedInUser.isSignIn || localStorage.getItem('login')? <Nav.Link as={Link} to='/login' onClick={()=>handleSignOut()}>Sign out</Nav.Link> : <Nav.Link as={Link} to='/login'>Sign in</Nav.Link>
                }
                </Navbar.Collapse>
                
                   </Nav> 
                   
                
            </Navbar>
        </div>
    );
};

export default Headers;