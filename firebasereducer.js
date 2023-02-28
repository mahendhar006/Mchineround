const initialState = {
    firebaseAuth: null,
    firebaseDB: null
  };
  
  const firebaseReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_FIREBASE_AUTH":
        return {
          ...state,
          firebaseAuth: action.payload
        };
      case "SET_FIREBASE_DB":
        return {
          ...state,
          firebaseDB: action.payload
        };
      default:
        return state;
    }
  };
  
  export default firebaseReducer;
  