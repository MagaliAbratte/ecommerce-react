import { useEffect, useState } from "react"
/* import { obtenerProductoById } from "../../asyncMock" */
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner';

import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

export const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
      setLoading(true)
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
      .finally(()=>{
        setLoading(false)
      }
    )
    }, [itemId])

    if(loading){
      return (
        <div className='spinner'>
          <Spinner animation="border" />;
        </div>
      )
    }
    
    return (
        <div className="detalles-container">
            <ItemDetail {...producto}/>
        </div>
    )
}