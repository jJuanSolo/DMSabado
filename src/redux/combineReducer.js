import { combineReducers } from 'redux';

import principalReducer from './reducerPrincipal';
// Ejemplo 
// import Registro from '../registro';

const combineReducer = combineReducers({
    principalReducer,
    // Registro,
    // Perfil: PerfilUsuarioReducer,
});

export default combineReducer;