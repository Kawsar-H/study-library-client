import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const ProductDetails = () => {
    const {id} = useParams()
    const [detail, setDetail] = useState({})
    useEffect(() => {
        const url = `https://fathomless-caverns-10061.herokuapp.com/product/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data))
    }, [id])
    const { name, quantity, price , _id} = detail;
    console.log(detail)
    return (
        <div className=" text-center">
            <Header></Header>
            <h1>Checkout</h1>
           <table border="1" className="table">
                        <thead>
                            <tr>
                                <th>Product  Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                           <tr><td>{name}</td><td>{quantity}</td><td>{price}</td></tr>
                        </tbody>
                    </table>
                    <Link to={`/orders/${_id}`}><button>CheckOut</button></Link>

        </div>
    );
};

export default ProductDetails;