import { useState } from "react"

export const CheckoutForm = ({onConfirm}) => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [confirmarEmail, setConfirmarEmail] = useState('')
    const [error,setError] = useState('');

    const handleConfirm = (e) =>{
        e.preventDefault ()

        if (email !== confirmarEmail){
            setError ('Por favor, verifica que los emails ingresados sean iguales')
            return;
        }

        const userData = {
            nombre, apellido, telefono, email
        }
        onConfirm (userData)
    }

  return (
    <div>
        <form onSubmit={handleConfirm} className="form">
            <label>
                Nombre*
            </label>
            <input 
            type='text'
            value={nombre} 
            onChange={({target}) => setNombre(target.value)}
            required
            />

            <label>
                Apellido*
            </label>
            <input 
            type='text'
            value={apellido} 
            onChange={({target}) => setApellido(target.value)}
            required
            />

            <label>
                Telefono*
            </label>
            <input 
            type='text' 
            value={telefono} 
            onChange={({target}) => setTelefono(target.value)}
            required
            />

            <label>
                Email*
            </label>
            <input 
            type='email' 
            value={email} 
            onChange={({target}) => setEmail(target.value)}
            required
            />

            <label>
               Confirmar Email*
            </label>
            <input 
            type='email' 
            value={confirmarEmail} 
            onChange={({target}) => setConfirmarEmail(target.value)}
            required
            />
            <p>* campo obligatorio</p>
            {error && <p>{error}</p>}

            <div>
                <button type='submit' className="form-boton">Crear Orden</button>
            </div>
        </form>
    </div>
  )
}
