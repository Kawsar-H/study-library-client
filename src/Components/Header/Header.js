import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">Study Library</Link>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        
        <Link className="nav-link" to="/orders">Orders</Link>
      </li>
      <li className="nav-item">
        
        <Link className="nav-link" to="/admin-panel">Admin</Link>
      </li>
      <li class="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
        
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Header;