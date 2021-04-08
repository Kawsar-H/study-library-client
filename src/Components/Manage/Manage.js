
import React, { useEffect, useState } from 'react';

const Manage = () => {
    const [order , setOrder] = useState([])
    useEffect(()=>{
        fetch('https://fathomless-caverns-10061.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setOrder(data))
       
    },[])
    const {  quantity } = order;
    console.log(order)
    return (
        <div>
            <h1>{order.length}</h1>
            {
                <li>{quantity}</li>
            }
        </div>
    );
};

export default Manage;