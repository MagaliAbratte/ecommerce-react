import { useEffect, useState } from 'react'
import { obtenerCategoria, obtenerProductos } from '../../asyncMock'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({ greeting }) =>{

    const [productos, setProductos] = useState([])

    const { categoriaId } = useParams ()

    useEffect(() => {
      const asyncFunc = categoriaId ? obtenerCategoria : obtenerProductos

      asyncFunc(categoriaId)
      .then (response =>{
        setProductos (response)
      }) 
      .catch (error =>{
        console.error (error)
      })
    }, [categoriaId])
    

 return (
    <div className="contenedor-titulo">
        <h1 className="titulo">{greeting}</h1>
        <ItemList productos= {productos}/>
    </div>
 )
}