import { combineReducers } from "redux";

import firebaseReducer from "./firebasereducer";
import authReducer from "./authreducer";
import cartReducer from "./cartreducer";
import productReducer from "./productreducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  auth: authReducer,
  cart: cartReducer,
  products: productReducer,
});

export default rootReducer;
