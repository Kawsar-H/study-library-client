import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';

const Order = () => {
    const {id} = useParams()
    const [order, setOrder] = useState({})
    useEffect(() => {
        const url = `http://localhost:3003/product/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [id])
    const { name, quantity, price } = order;
    console.log(order)


    return (
        <div className="text-center">
            <Header></Header>
          <h1>Your Order List</h1>
           <table border="1" className="table" >
                        <thead>
                            <tr>
                                <th> # </th>
                                <th>Product  Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                           <tr><td>1</td><td>{name}</td><td>{quantity}</td><td>{price}</td></tr>
                        </tbody>
                    </table> 


        </div>
    );
};

export default Order;