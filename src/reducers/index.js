import * as actionTypes from "../actionTypes";

const initialState = {
    accessories: [],
    clothing: [],
    products: [],
    cart: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_PRODUCT: {
      const productIndex = state.cart.findIndex((item) => item.id === payload.id);
      if (state.cart.length && (productIndex !== -1)) {
        state.cart[productIndex].quantity += 1;
      } else {
        payload.quantity = 1;
        state.cart = [...state.cart, payload]
      }
      return {...state, cart: [...state.cart]}
    }
    
    case actionTypes.CLEAR_CART : 
      return {...state, cart : []}
      
    case actionTypes.GET_PRODUCTS:
      return { ...state, products: payload.products, accessories: payload.accessories, clothing: payload.clothing };

    case actionTypes.REMOVE_PRODUCT: {
      const newCartItems = state.cart.filter((item) => item.id !== payload.id);
      return {...state, cart: [...newCartItems]}
    }
     
    default:
      return state;
  }
};
