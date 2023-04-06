import cart from "./assets/cart.png"

export const CartWidget = ()=> {
 return (
    <div className="icono-carrito">
      <img src={cart} alt="Cart-Widget"/>
      0
    </div>
 )
}