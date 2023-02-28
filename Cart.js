import React from "react";
import { connect } from "react-redux";
import {
  removeFromCart,
  updateCartItem,
} from "../Redux/actions";

const Cart = ({ cartItems, totalPrice, removeFromCart, updateCartItem }) => {
  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateCartItem(item.id, e.target.valueAsNumber)
                    }
                    min="1"
                  />
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <strong>Total:</strong> ${totalPrice.toFixed(2)}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}
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
    removeFromCart: (productId) => dispatch(removeFromCart(productId)),
    updateCartItem: (productId, quantity) =>
      dispatch(updateCartItem(productId, quantity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
