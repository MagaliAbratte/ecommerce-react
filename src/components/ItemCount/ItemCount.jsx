import { useState } from "react"

export const ItemCount = ({stock, valorInicial, agregar}) => {
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
    <div className="contenedor-contador">
        <div className="contador">
          <button onClick={incrementar} className="contador-boton">+1</button>
          <h4>{cantidad}</h4>
          <button onClick={decrementar} className="contador-boton">-1</button>
        </div>
        <div>
          <button className="contador-boton" onClick={()=> agregar=(cantidad)} disabled= {!stock}>Agregar al carrito</button>
        </div>
    </div>
)
}