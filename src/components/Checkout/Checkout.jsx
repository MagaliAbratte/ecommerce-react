import React, { useContext, useState } from 'react'
import { db } from '../../services/firebase/firebaseConfig'
import { CheckoutForm } from '../CheckoutForm/CheckoutForm'
import { CartContext } from '../../context/CartContext'
import { Timestamp, addDoc, collection, documentId, getDoc, getDocs, query, writeBatch, where } from 'firebase/firestore'

export const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, cartTotal, limpiarCarrito} = useContext (CartContext)

    const createOrder = async ({nombre, telefono, email}) =>{
        setLoading (true)

        try{
            const objOrder = {
                buyer: {
                    nombre, telefono, email
                },
                items: cart,
                total: cartTotal,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch (db)
            const outOfStock = []
            const ids = cart.map (prod => prod.id)
            const productsRef = collection (db, 'productos')
            const productsAddedFromFirestore = await getDocs (query(productsRef, where (documentId(), 'in', )))
            const { docs } = productsAddedFromFirestore

            docs.forEach (doc =>{
                const dataDoc = doc.data()
                const stockOb = dataDoc.stock

                const productsAddedToCart = cart.find (prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart?.cantidad 

                if (stockOb >= prodQuantity){
                    batch.update (doc.ref, {stock: stockOb - prodQuantity})
                } else {
                    outOfStock.push ({ id: doc.id, ...dataDoc})
                }
            })

            if (outOfStock.length === 0){
                await batch.commit ()
                const orderRef = collection (db, 'orders')
                const orderAdded = await addDoc (orderRef, objOrder)

                setOrderId (orderAdded.id)
                limpiarCarrito()
            } else {
                console.error ('Hay productos fuera de stock')
            }
        } catch (error) {
            console.log(error);
        } finally{
            setLoading (false)
        }
    }

    if (loading){
        return <h2>Se esta generando su orden...</h2>
    }

    if (orderId){
        return <h2>El ID de su orden es {orderId}</h2>
    }

  return (
    <div>
        <h2>Checkout</h2>
        <CheckoutForm onConfirm={createOrder}/>
    </div>
  )
}
