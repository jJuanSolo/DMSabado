import { ACTUALIZARINPUT } from './actionType';

const STATE_INICIAL = {
    input: '',
    // Ejemplo
    celular: '',
    correo: '',
    contraseña: '',
}

export default ( state = STATE_INICIAL, action ) => {
    switch(action.type){

        case ACTUALIZARINPUT:
            return {...state, input: atcion.carga  };     
        // Ejemplo
/*
        case ACTUALIZARCORREORegistro:
            return {...state, correo: action.carga }

        case ACTUALIZARCORREOPerfil:
            return {...state, correo: action.carga }
*/
       default:
           return {...state };
    }
}