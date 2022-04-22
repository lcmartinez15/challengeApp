import React from 'react'
import './Header.scss'
import {
  useNavigate,
} from 'react-router-dom';

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className='Logo' onClick={()=> navigate('/')}></div>
  )
}
