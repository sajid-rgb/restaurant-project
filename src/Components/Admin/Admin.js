import axios from 'axios';
import React, { useState } from 'react';

const Admin = () => {
    const [imageURL,setImageURL] = useState(null)
    const [formData,setFormData] = useState({})
    const handleAddProduct = () => {
        fetch('https://whispering-thicket-80285.herokuapp.com/addFoods',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
  
    }
    const handleFormChange = (event) => {
        if(event.target.name==='name'){
            formData.name = event.target.value

        }
        if(event.target.name==='price'){
            formData.price = event.target.value

        }
        if(event.target.name==='category'){
            formData.category = event.target.value

        }

    }
    const handleChangeImage = (event) =>{
        const imageData = new FormData();
        imageData.set('key','a5e20ad2d20e8e8417f6fd306447737a')
        imageData.append('image',event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function (response) {
              formData.image=response.data.data. display_url
            
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <div>
             <div className='text-center mt-5'>
            <input type="text" placeholder="Enter food name" name='name' onBlur={handleFormChange} className="w-50 mt-3 rounded"/><br/>
            <input type="text" placeholder="Enter Price" name='price' onBlur={handleFormChange} className="w-50 mt-3 rounded"/><br/>
            <input type="text" placeholder="Enter Category" name='category' onBlur={handleFormChange} className="w-50 mt-3 rounded"/><br/>
            <input type="file" onBlur={handleChangeImage} className='mt-3'/> <br/>
            <button onClick={handleAddProduct} className="w-25 mt-3 btn-danger">Add food</button>
        </div>
        </div>
    );
};

export default Admin;