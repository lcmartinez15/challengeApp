import React from 'react'
import './ItemList.scss'

export const ItemLista = (item) => {
console.log(item.item.id);
  return (
    <div className='product-container'>     
        <div>
          {item.item.picture!= undefined ? <img className='product-image' src={item.item.picture} alt="" />: <></> }
        </div>
        <div className='product-detail'>
          <label>{item.item.price.amount}</label>
          <br />
          <label>{item.item.title}</label>
        </div>       

    </div>
  )
}
