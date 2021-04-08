import React, { useState } from 'react';
import LeftNav from './LeftNav/LeftNav';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL , setImageURL] = useState(null);
    const onSubmit = data =>{ 
        
        const eventData = {
            name: data.name,
            quantity: data.quantity,
            price: data.price,
            ImageURL:imageURL,
           
            
        }
        const url =`http://localhost:3003/addEvent`
    console.log(eventData)
    fetch(url , {
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(eventData)
    },[])
    .then(res => console.log('server', res.json()))

};
    
    const handleImageUpload = event => {
     console.log(event.target.files[0])
     const imageData = new FormData();
     imageData.set('key' , 'eeda23fee90b48c8ac2e2a608f48b104');
     imageData.append('image' , event.target.files[0])

     axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });




    }
    return (
        <div>
            
            <LeftNav></LeftNav>
            <h1>Add Your Prouct</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
             
            

            <label>Product Name</label><input type="text"  defaultValue="product name" {...register("name")} />  <br/>
            <label>Quantity</label><input type="text"  defaultValue="quantity" {...register("quantity")} /> <br/>
            <label>Price</label><input type="text"  defaultValue="price" {...register("price")} /> <br/>
           
            <label>Image Upload</label><input type="file"  onChange={handleImageUpload} /> <br/>
             
            
          
          
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Admin;