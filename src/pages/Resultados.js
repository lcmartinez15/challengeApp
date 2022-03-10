import React from 'react'
import { ItemLista } from '../components/Producto/ItemLista'

import { useDispatch, useSelector } from "react-redux";

export const Resultados = () => {

  const {listaItems } = useSelector(state => state.busqueda);
  const dispatch = useDispatch();

  return (
    <div>
       {listaItems.map((item) => (
           <ItemLista key={item.id} item={item}/>     
          ))}  
        
    </div>
   
  )
}
