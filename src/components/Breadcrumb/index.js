import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import './Breadcrumb.scss'

export const Breadcrumb = (data) => {
  const {categories } = useSelector(state => state.busqueda);
  return (
    <div className='categories'> {categories.join(' > ')} </div>
  )
}
