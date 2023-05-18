import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const agregarItem = (item, cantidad) =>{
        if (!inCart(item.id)){
            setCart (prev => [...prev, {...item, cantidad}])
        } else {
            console.error ('El producto ya fue agregado')
        }
    }

    const eliminarItem = (itemId) =>{
        const actualizarCart = cart.filter (prod => prod.id !== itemId)
        setCart (actualizarCart)
    }

    const limpiarCarrito = () =>{
        setCart ([])
    }

    const inCart = (itemId) =>{
        return cart.some (prod => prod.id === itemId)
    }

    const cantidadTotal = () => {
        return cart.reduce((acc, prod) => (acc += prod.cantidad), 0);
    }
    
    const cartTotal = () => {
        return cart.reduce((acc, prod) => (acc += prod.precio * prod.cantidad), 0);
    }

    return (
        <CartContext.Provider value={{cart, agregarItem, eliminarItem, limpiarCarrito, inCart, cantidadTotal, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

