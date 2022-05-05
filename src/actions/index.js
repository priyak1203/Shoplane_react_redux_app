import * as actionTypes from "../actionTypes";


export const addProduct = (payload) => ({
  type: actionTypes.ADD_PRODUCT,
  payload,
});

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART
})

export const getProducts = (payload) => ({
  type: actionTypes.GET_PRODUCTS,
  payload,
});

export const removeProduct = (payload) => ({
  type: actionTypes.REMOVE_PRODUCT,
  payload,
});

