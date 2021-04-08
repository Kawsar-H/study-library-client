import React, {  useEffect, useState } from "react";
import Header from './Header/Header';
import Product from './Product/Product';

const Home = () => {
    const [events , setEvents] = useState([]);
    useEffect(() =>{
        fetch(`https://fathomless-caverns-10061.herokuapp.com/events`)
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])
    return (
        
        <div>
            <Header></Header>
             <div className="row">
               
               {
                    events.map((event)=><Product event={event} key={event._id}></Product>)
                }
               

             </div>
        </div>
    );
};

export default Home;