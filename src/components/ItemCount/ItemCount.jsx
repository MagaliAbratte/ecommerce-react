import { useState } from "react"

export const ItemCount = ({valorInicial, stock, agregar}) => {

const [cantidad, setCantidad] = useState(valorInicial)

const incrementar = () =>{
    if (cantidad < stock){
        setCantidad (cantidad + 1)
    }
}

const decrementar = () =>{
   if (cantidad > 1){
    setCantidad (cantidad - 1)
   }
}

return (
    <div className='contenedor-contador'>
        <div className="contador">
          <button onClick={incrementar} className='contador-btn'>+</button>
          <h4>{cantidad}</h4>
          <button onClick={decrementar} className='contador-btn'>-</button>
        </div>
        <div>
          <button className='contador-boton' onClick={()=> agregar(cantidad)} disabled= {!stock}>
            Agregar al carrito
          </button>
        </div>
    </div>
)
}