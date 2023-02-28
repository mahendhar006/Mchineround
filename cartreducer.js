import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_ITEM,
    CLEAR_CART,
  } from "./acttiontype";
  
  const initialState = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (existingCartItemIndex !== -1) {
          const updatedItems = [...state.items];
          updatedItems[existingCartItemIndex].quantity++;
          return {
            ...state,
            items: updatedItems,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + action.payload.price,
          };
        } else {
          const newItem = { ...action.payload, quantity: 1 };
          return {
            ...state,
            items: [...state.items, newItem],
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + action.payload.price,
          };
        }
      case REMOVE_FROM_CART:
        const existingCartItem = state.items.find(
          (item) => item.id === action.payload
        );
        if (existingCartItem.quantity === 1) {
          const updatedItems = state.items.filter(
            (item) => item.id !== action.payload
          );
          return {
            ...state,
            items: updatedItems,
            totalItems: state.totalItems - 1,
            totalPrice: state.totalPrice - existingCartItem.price,
          };
        } else {
          const updatedItems = [...state.items];
          const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.payload
          );
          updatedItems[existingCartItemIndex].quantity--;
          return {
            ...state,
            items: updatedItems,
            totalItems: state.totalItems - 1,
            totalPrice: state.totalPrice - existingCartItem.price,
          };
        }
      case UPDATE_CART_ITEM:
        const updatedItems = [...state.items];
        const existingItemIndex = state.items.findIndex(
          (item) => item.id === action.payload.productId
        );
        updatedItems[existingItemIndex].quantity = action.payload.quantity;
        const updatedTotalPrice =
          state.totalPrice -
          state.items[existingItemIndex].price *
            state.items[existingItemIndex].quantity +
          state.items[existingItemIndex];
        }}

  export default cartReducer;