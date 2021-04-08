
import React from 'react';

import { Link } from 'react-router-dom';

const Product = (props) => {
    const { ImageURL, name, price , _id} = props.event;
    return (
        <div className="col-md-4">
           
           <img className="img" alt="product" src={ImageURL}/>
            <h1>{name}</h1>
            <h1>Price: ${price}</h1>
            <Link to={`/about/${_id}`}><button>Buy Now</button></Link>
            
        </div>
    );
};

export default Product;