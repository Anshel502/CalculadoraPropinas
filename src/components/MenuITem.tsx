import React from 'react'
import tailwindcss from '@tailwindcss/vite'

export default function Menu({Menu, handlerClick}: MenuProps) {


const{id,name,price} = Menu;



  return (
   <>
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                    <p>{price}</p>
                    <p className="fw-black text-primary fs-3">${price}</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100"
                        onClick={() => handlerClick(Menu)}
                    >Agregar a la Orden</button>
                </div>
            </div>

   </> 
   
  )
}
