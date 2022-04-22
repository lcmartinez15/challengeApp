import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { realizarBusqueda } from '../../redux/actions/busqueda';
import './Header.scss'
import {
  useNavigate,
} from 'react-router-dom';


export const Buscador = () => {
  const [value, setvalue] = useState('');
  const navigate = useNavigate();

    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(realizarBusqueda(value));
        navigate('/items/');
      };

      const onChange = (e) =>
      setvalue(e.target.value);
  
  return (
    <div className='search-container'>  
      <input 
          className="search"
          type = "search" 
          placeholder = "Nunca dejes de buscar" 
           value={value}
           onChange={(e) => onChange(e)}
        />                       
      <button onClick={onSubmit} className="btn-search"> 
      
    </button>
    </div>  )
}
