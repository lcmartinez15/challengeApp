import React from 'react'
import {Logo} from './logo'
import { Buscador } from './buscador'
import './Header.scss'
export const Header = () => {
  return (
    <div className='header'>
      <div className='containerHeader'>
      <Logo></Logo>
        <Buscador>
        </Buscador>
      </div>
        
    </div>
  )
}
