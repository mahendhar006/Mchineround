import React from "react";
import { connect } from "react-redux";
// import {Checkout } from "../Redux/actions";

const Checkout = ({ cartItems, totalPrice, checkout }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    checkout(cartItems);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" required />

        <label htmlFor="cardNumber">Credit Card Number:</label>
        <input type="text" id="cardNumber" required />

        <label htmlFor="expDate">Expiration Date:</label>
        <input type="text" id="expDate" required />

        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" required />

        <button type="submit">Place Order</button>
      </form>
      <p>Total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.items,
    totalPrice: state.cart.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkout: (cartItems) => dispatch(Checkout(cartItems)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
