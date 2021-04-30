import { faSadTear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HideContext } from '../../App';
import Main from '../Main/Main';
import './SearchBar.scss'
const SearchBar = () => {
    const [search,setSearch] = useState(null)
    const[foods,setFoods] = useState([])
    const [isHide,setIsHide] = useContext(HideContext)
    const [isFound,setIsFound] = useState(false)
    const searchFood = (event) =>{
        setSearch(event.target.value)
        setIsHide(false)
        setIsFound(true)

    }
    const url='https://whispering-thicket-80285.herokuapp.com'
    useEffect(()=>{
        fetch(`https://whispering-thicket-80285.herokuapp.com/food?search=${search}`)
        .then(res=>res.json())
        .then(data=>{
           
                setFoods(data)
            
        })
    },[search])
    const handleLinkClick = () =>{
        setSearch(null)
        setIsFound(false)
        setIsHide(true)
        document.getElementById('search').value=null

    }
    return (
        <main>
          <div className='searchInput text-center d-flex flex-column justify-content-end'>
            <h3 className='text-white mr-5'>Are you hungry?</h3>
            <div className='mb-5 mr-4 text-center d-flex align-items-center justify-content-center'>
            <input type="text" placeholder="Search Food here..." className='form-control w-50' id='search' onChange={searchFood}/>
            <button className='btn btn-primary ml-3'>Search</button>
            </div>
            <div className="d-flex justify-content-center container mb-3">
            <Link to='/breakfast' className='text-white' onClick={()=>handleLinkClick()}>
                Breakfast
            </Link>
            <Link to='/lunch'  className='ml-3  text-white' onClick={() =>handleLinkClick()}>
                Lunch
            </Link>
            <Link to='/dinner' className='ml-3 text-white' onClick={() =>handleLinkClick()}>
                Dinner
            </Link>
            </div>
        </div>
          <div className="row container mx-auto mt-2">
          { foods.length >0?
              foods.map(food =><Main food={food}></Main>) :  isFound && foods.length===0? <h1 className='text-danger text-md-center container ml-md-5 mt-4 not-found'><FontAwesomeIcon icon={faSadTear} className='text-warning mr-3 ' ></FontAwesomeIcon>Ups Sorry! Food not found</h1>:<p></p>
          }
          </div>
        </main>

    );
};

export default SearchBar;