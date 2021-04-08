import React from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.scss'
const SearchBar = () => {
   
    return (
        <div className='searchInput text-center d-flex flex-column justify-content-end'>
            <h3 className='text-white mr-5'>Are you hungry?</h3>
            <div className='mb-5 mr-4 text-center d-flex align-items-center justify-content-center'>
            <input type="text" placeholder="Search Food here..." className='form-control w-50'/>
            <button className='btn btn-primary ml-3'>Search</button>
            </div>
            <div className="d-flex justify-content-center container mb-3">
            <Link to='/breakfast' className='text-white'>
                Breakfast
            </Link>
            <Link to='/lunch'  className='ml-3  text-white'>
                Lunch
            </Link>
            <Link to='/dinner' className='ml-3 text-white'>
                Dinner
            </Link>
            </div>
        </div>
    );
};

export default SearchBar;