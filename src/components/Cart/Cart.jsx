import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

export const Cart = () => {

    const {cart, limpiarCarrito, cantidadTotal, cartTotal} = useContext (CartContext)

    if (cantidadTotal() === 0) {
        return (
            <div>
                <h3>No hay productos agregados al carrito</h3>
                <Link to='/'>Productos</Link>
            </div>
        )
    }

  return (
    <div className='carrito'>
        { cart.map (p => <CartItem key={p.id} {...p}/>)}
        <h3 className='titulo'>Total: ${cartTotal()}</h3>
        <div className='div-botones'>
        <button onClick={()=>limpiarCarrito()} className='boton'>Vaciar carrito</button>
        <Link to='/checkout' className='boton'>Completar Compra</Link>
        </div>
    </div>
  )
}
