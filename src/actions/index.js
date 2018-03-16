export const ITEM = 'ITEM'
export const BUTTON = 'BUTTON'
export const SEARCH = 'SEARCH'
export const CART = 'CART'
export const ADD_CART = 'ADD_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const TITLE = 'TITLE'

//actionCreator
export const item = (value) => ({type: ITEM, value})
export const button = (value) => ({type: BUTTON, value})
export const search = (value) => ({type: SEARCH, value})
export const cart = (value) => ({type: CART, value})
export const addCart = (value) => ({type: ADD_CART, value})
export const clearCart = (value) => ({type: CLEAR_CART, value})
export const title = (value) => ({type: TITLE, value})
