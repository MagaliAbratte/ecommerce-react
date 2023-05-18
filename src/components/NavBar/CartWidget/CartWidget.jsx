import cart from "./assets/cart.png"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { Link } from "react-router-dom"


export const CartWidget = ()=> {

  const {cantidadTotal} = useContext (CartContext)
 
  return (
    <Link to= '/cart' className="icono-carrito">
      <img src={cart} alt="Cart-Widget"/>
      { cantidadTotal() }
    </Link>
 )
}