import React from 'react'
import './ItemList.scss'

export const ItemLista = (item) => {
console.log(item.item.id);
  return (
    <div className='product-container'>     
        <div>
          <img className='product-image' src={item.item.thumbnail} alt="" /> 
        </div>
        <div className='product-detail'>
          <label>{item.item.price}</label>
          <br />
          <label>{item.item.title}</label>
        </div>       

    </div>
  )
}
