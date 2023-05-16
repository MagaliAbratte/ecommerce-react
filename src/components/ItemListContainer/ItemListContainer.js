import { useEffect, useState } from 'react'
/* import { obtenerCategoria, obtenerProductos } from '../../asyncMock' */
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

export const ItemListContainer = ({ greeting }) =>{

    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams ()

    useEffect(() => {
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

      /* const asyncFunc = categoriaId ? obtenerCategoria : obtenerProductos

      asyncFunc(categoriaId)
      .then (response =>{
        setProductos (response)
      }) 
      .catch (error =>{
        console.error (error)
      }) */
    }, [categoriaId])
    

 return (
    <div className="contenedor-titulo">
        <h1 className="titulo">{greeting}</h1>
        <ItemList productos= {productos}/>
    </div>
 )
}