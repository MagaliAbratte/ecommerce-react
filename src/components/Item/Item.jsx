import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({img, id, nombre, precio}) =>{
  return (
    <Card className='card' style={{ width: '20rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body className='card-body'>
      <Card.Title className='card-text'>{nombre}</Card.Title>
      <Card.Text>
        ${precio}
      </Card.Text>
      <Link to={`/item/${id}`} className='card-boton'>Ver Detalle</Link>
    </Card.Body>
    </Card>
  )
}
