import { createStore } from 'redux';
//import {componente creado en reducers} from './reducer'; <---aquí importamos la La constante de la reducer

//Creamos una constante para un estado inicial en este caso una muestra de objetos random 
const initialState = {
   //creamos un objeto como en el ejemplo de weather -->city: 'Santiago,scl'
}

//vinculamos el plugin redux devtools con nuestra aplicación (ojo con el any! lo puse por que si, hay que definir el reducer)
//Exportará el createStore() quien recibe por parámetro el reducer y un estado inicial (opcional)
export const store = createStore(any, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__&& 
    window.__REDUX_DEVTOOLS_EXTENSION__());