import React from "react";
import { connect } from "react-redux";

const Invoice = ({ cartItems, totalPrice }) => {
  return (
    <div>
      <h1>Invoice</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <strong>Total:</strong> ${totalPrice.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.items,
    totalPrice: state.cart.totalPrice,
  };
};

export default connect(mapStateToProps)(Invoice);
