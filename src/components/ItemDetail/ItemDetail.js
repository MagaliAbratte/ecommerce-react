import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { ItemCount } from "../ItemCount/ItemCount"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

export const ItemDetail = ({img, id, nombre, precio, descripcion, stock})=>{

    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const { agregarItem } = useContext (CartContext)

    const agregados = (cantidad) =>{
      setCantidadAgregada (cantidad)

      const item = {
        id, nombre, precio
      }

      agregarItem (item, cantidad)
    }

    return (
    <div className='detalles'>
     <section>
      <Card style={{ width: '20rem'}} className='card-detalles'>
      <Card.Img variant="top" src={img} className='card-detalles-img'/>
      <Card.Body>
        <Card.Title className='card-detalle-texto'>{id}</Card.Title>
        <Card.Title className='card-detalle-texto'>{nombre}</Card.Title>
        <Card.Text className='card-detalle-texto'>
          {descripcion}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className='card-detalle-texto'>${precio}</ListGroup.Item>
      </ListGroup>
    </Card>
    </section>
    <section className='controles'>
      {
        cantidadAgregada > 0 ? (
          <Link to= './cart' className='terminar-boton'>Terminar Compra</Link>
        ) : (
          <ItemCount valorInicial={1} stock={stock} agregar={agregados}/>
        )
      }
    </section>
    </div>
   )
}

