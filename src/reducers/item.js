//Importará la constante desde actions y evaluará si el tipo de acción corresponde
import {ITEM} from './../actions';
import {BUTTON} from './../actions';
import {CART} from './../actions';
import {ADD_CART} from './../actions';
import {CLEAR_CART} from './../actions';
import {TITLE} from './../actions';
import {SEARCH} from './../actions';

export const item = (state, action)=> {
  switch (action.type) {
    case ITEM:
      return {...state, item:action.value}
      default:
      return state;
  }
}

export const button = (state, action)=> {
  switch (action.type) {
    case BUTTON:
      return {...state, item:action.value}
      default:
      return state;
  }
}

export const cart = (state, action)=> {
  switch (action.type) {
    case CART:
      return {...state, item:action.value}
      default:
      return state;
  }
}

export const addCart = (state, action)=> {
  switch (action.type) {
    case ADD_CART:
      return {...state, item:action.value}
      default:
      return state;
  }
}

export const clearCart = (state, action)=> {
  switch (action.type) {
    case CLEAR_CART:
      return {...state, item:action.value}
      default:
      return state;
  }
}

export const title = (state, action)=> {
  switch (action.type) {
    case TITLE:
      return {...state, item:action.value}
      default:
      return state;
  }
}

export const search = (state, action)=> {
  switch (action.type) {
    case SEARCH:
      return {...state, item:action.value}
      default:
      return state;
  }
}