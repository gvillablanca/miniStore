import { createStore } from 'redux';
import { item } from './../reducers/item'; 

//vinculamos el plugin redux devtools con nuestra aplicación (ojo con el any! lo puse por que si, hay que definir el reducer)
//Exportará el createStore() quien recibe por parámetro el reducer y un estado inicial (opcional)
export const store = createStore(item, 
    window.__REDUX_DEVTOOLS_EXTENSION__&& 
    window.__REDUX_DEVTOOLS_EXTENSION__());
