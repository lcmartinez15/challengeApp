import axios from "axios";
import { SET_ERROR, SET_ITEM, SET_RESULTADO } from "../constantes";

//Realizar la busqueda segun parametros, realizar el set de informacion a la lista de resultados
export const realizarBusqueda = (value) => async (dispatch) => {

  
    console.log("realizarBusqueda "+ value);
    try {
      const res = await axios.get('http://localhost:5000/api/items?q='+value);
      console.log("action", res);

      
      if (res.data) {
        console.log("data user" + res);
        dispatch({
          type: SET_RESULTADO,
          payload: res.data,
        });
      }
    } catch (error) {
      dispatch({
        type: SET_ERROR,
      });
    }
  };

  //Realizar la busqueda segun parametros, realizar el set de informacion a la lista de resultados
export const verDetalle = (id) => async (dispatch) => {
    console.log("realizarBusqueda ");
    try {
      const res = await axios.get('https://google.com');
      console.log("action", res);
      if (res.data) {
        console.log("data user" + res);
        dispatch({
          type: SET_ITEM,
          payload: res.data,
        });
      }
    } catch (error) {
      dispatch({
        type: SET_ERROR,
      });
    }
  };