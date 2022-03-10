import React from 'react'
import {Logo} from './logo'
import { Buscador } from './buscador'
import './Header.scss'
export const Header = () => {
  return (
    <div className='Header'>
        <Logo></Logo>
        <Buscador>
        </Buscador>
    </div>
  )
}
