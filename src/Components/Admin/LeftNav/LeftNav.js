import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';

const LeftNav = () => {
    return (
        <div>
          <Header></Header>
            <nav>
          <ul>
            <li>
              <Link to="/manage">Product Manage</Link> <br/>
              
            </li>
            <li>
            <Link to="/add">Add Product</Link>
            </li>
          </ul>
        </nav>

        
            
        </div>
    );
};

export default LeftNav;