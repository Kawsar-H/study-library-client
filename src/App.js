import React, { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Admin from "./Components/Admin/Admin";

import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Manage from "./Components/Manage/Manage";
import Order from "./Components/Order/Order";
import Auth from "./Components/Auth/Auth";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


export const UserContext = createContext()
function App() {
  const [user,setUser]=useState({isSignedUp:true})
  return (
    
    <UserContext.Provider value={[user,setUser]}>

      <Router>
        <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <PrivateRoute path="/admin-panel">
            <Admin></Admin>
          </PrivateRoute>
          
          <PrivateRoute path="/about/:id">
            <ProductDetails></ProductDetails>
            </PrivateRoute>
          <Route path="/manage">
            <Manage></Manage>
          </Route>
          <Route path="/orders/:id">
            <Order></Order>
          </Route>
          <Route path="/add">
            <Admin></Admin>
          </Route>
          <Route path="/orders">
            <Order></Order>
          </Route>
        </Switch>
        
        <Route exact path='/login'>
          <Auth></Auth>
        </Route>
       
      </Router>
      
      
      </UserContext.Provider>
  );
}

export default App;
