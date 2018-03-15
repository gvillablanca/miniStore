//Importará la constante desde actions y evaluará si el tipo de acción corresponde
import {ITEM} from './../actions';

export const item = (state, action)=> {
  switch (action.type) {
    case ITEM:
      return {...state, item:action.value}
      default:
      return state;
  }
}
