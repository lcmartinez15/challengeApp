import React from 'react'
import { Breadcrumb } from '../Breadcrumb'
import { Header } from '../Header'
import './index.scss'
import { useSelector } from "react-redux";

export const Layout = ({ children }) => {
  const {listaItems } = useSelector(state => state.busqueda);
  
  function RenderContent() {
    if(listaItems && listaItems.length>0){
      return (
        <>
          <Breadcrumb />
          <div className='content'>
            {children}
          </div>
        </>
      );
    }
    
  }

  return (
    <div className='container'>
        <Header></Header>
        {RenderContent()}
    </div>
  )
}
