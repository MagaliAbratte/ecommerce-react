import { useEffect, useState } from "react"
/* import { obtenerProductoById } from "../../asyncMock" */
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

export const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
      const docRef = doc (db, 'productos', itemId)

      getDoc (docRef)
      .then (response =>{
        const data = response.data()
        const productAdapted = {id: response.id, ...data}
        setProducto (productAdapted)
      })
      .catch (error =>{
        console.log(error);
      })
      /* obtenerProductoById (itemId)
      .then (response => {
           setProducto (response)
      })
      .catch (error =>{
        console.log (error)
      }) */
    }, [itemId])
    
    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}