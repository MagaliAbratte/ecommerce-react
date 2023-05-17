import { useEffect, useState } from 'react'
/* import { obtenerCategoria, obtenerProductos } from '../../asyncMock' */
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

export const ItemListContainer = ({ greeting }) =>{

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams ()

    useEffect(() => {
      setLoading (true)

      const collectionRef = categoriaId
      ? query (collection(db, 'productos'), where('categoria', '==', categoriaId))
      : collection (db, 'productos')

      getDocs (collectionRef)
      .then (response => {
        const productAdapted = response.docs.map(doc =>{
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProductos (productAdapted)
      })
      .catch (error =>{
        console.log(error);
      })
      .finally (()=>{
        setLoading(false)
      })
    }, [categoriaId])

    if (loading){
      return (
        <div className='spinner'>
          <Spinner animation="border" />;
        </div>
      )
    }
    
 return (
    <div className="contenedor-titulo">
        <h1 className='titulo'>{greeting}</h1>
        <ItemList productos= {productos}/>
    </div>
 )
}