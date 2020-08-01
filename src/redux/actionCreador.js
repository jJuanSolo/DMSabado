import { ACTUALIZARINPUT } from './actionType';

export default ActualizarI = (texto) => {
    // Ejemplo 
    // celular.legth() > 10 ? ejecutar el return O no ejecutarlo
    return {
        type: ACTUALIZARINPUT,
        carga: texto
    }
} 