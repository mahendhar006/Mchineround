import React from "react";
import {  Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./Components/Login";
import LandingPage from "./Components/Landing page";
import ProductListPage from "./Components/ProductListPage";
import Checkout from "./Components/Checkout";
import Invoice from "./Components/Invoice";
import Cart from "./Components/Cart";

const App = () => {
  return (
    
      <>
      <BrowserRouter>
        <Routes>
        <Route>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/category/:category" component={ProductListPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/invoice" component={Invoice} />
          <Route path="/cart" component={Cart} />
          </Route>
        </Routes>
        </BrowserRouter>
      </>
   
  );
};

export default App;
