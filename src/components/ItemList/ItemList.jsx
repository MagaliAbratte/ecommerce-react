import { Item } from "../Item/Item"

export const ItemList = ({productos})=>{
  return (
    <div className='contenedor-cards'>
        {productos.map (prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}