import { useEffect, useState } from "react"
import { obtenerProductoById } from "../../asyncMock"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
      obtenerProductoById (itemId)
      .then (response => {
           setProducto (response)
      })
      .catch (error =>{
        console.log (error)
      })
    }, [itemId])
    
    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}