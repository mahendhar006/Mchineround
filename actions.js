import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_ITEM,
    CLEAR_CART,
  } from "./acttiontype";
  
  export const addToCart = (product) => {
    return {
      type: ADD_TO_CART,
      payload: product,
    };
  };
  
  export const removeFromCart = (productId) => {
    return {
      type: REMOVE_FROM_CART,
      payload: productId,
    };
  };
  
  export const updateCartItem = (productId, quantity) => {
    return {
      type: UPDATE_CART_ITEM,
      payload: { productId, quantity },
    };
  };
  
  export const clearCart = () => {
    return {
      type: CLEAR_CART,
    };
  };
  