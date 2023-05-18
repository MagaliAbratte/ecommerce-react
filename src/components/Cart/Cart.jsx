import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

export const Cart = () => {

    const {cart, limpiarCarrito, cantidadTotal, cartTotal} = useContext (CartContext)

    if (cantidadTotal() === 0) {
        return (
            <div className='carrito-vacio'>
                <h3>No hay productos agregados al carrito</h3>
                <Link to='/' className='carrito-vacio-link'>Productos</Link>
            </div>
        )
    }

  return (
    <div className='carrito'>
        <div className='div-carrito1'>
        { cart.map (p => <CartItem key={p.id} {...p}/>)}
        </div>
        <div className='div-carrito'>
        <h3 className='titulo'>Total: ${cartTotal()}</h3>
        <button onClick={()=>limpiarCarrito()} className='boton-carrito'>Vaciar carrito</button>
        <Link to='/checkout' className='boton-carrito1'>Generar Compra</Link>
        </div>
    </div>
  )
}
