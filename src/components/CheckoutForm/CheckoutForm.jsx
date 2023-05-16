import React, { useState } from 'react'

export const CheckoutForm = ({onConfirm}) => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (e) =>{
        e.preventDefault ()

        const userData = {
            nombre, telefono, email
        }

        onConfirm (userData)
    }

  return (
    <div>
        <form onSubmit={handleConfirm}>
            <label>
                Nombre:
            </label>
            <input 
            type="text" 
            value={nombre} 
            onChange={({target}) => setNombre(target.value)}
            />

            <label>
                Telefono:
            </label>
            <input 
            type="text" 
            value={telefono} 
            onChange={({target}) => setTelefono(target.value)}
            />

            <label>
                Email:
            </label>
            <input 
            type="text" 
            value={email} 
            onChange={({target}) => setEmail(target.value)}
            />

            <div>
                <button type='submit'>Crear Orden</button>
            </div>
        </form>
    </div>
  )
}
