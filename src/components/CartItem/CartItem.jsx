import React from 'react'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

export const CartItem = ({nombre, precio, cantidad, id}) => {

  const {eliminarItem} = useContext (CartContext)

  return (
    <div>
      <section className='producto-carrito'>
        <h4>{nombre}</h4>
        <h4>Precio por unidad: ${precio}</h4>
        <h4>{cantidad}</h4>
        <button onClick={()=> eliminarItem(id)} className='boton'>Eliminar producto</button>
      </section>
    </div>
  )
}
