/* import mates1 from "./components/Item/assets/mate1.jpg"
import mates2 from "./components/Item/assets/mates2.jpg"
import mates3 from "./components/Item/assets/mates3.jpg"
import almohadon1 from "./components/Item/assets/almohadon1.jpg"
import almohadon2 from "./components/Item/assets/almohadon2.jpg"
import almohadon3 from "./components/Item/assets/almohadon3.jpg"
import canastos1 from "./components/Item/assets/canastos1.jpg"
import canastos2 from "./components/Item/assets/canastos2.jpg"
import canastos3 from "./components/Item/assets/canastos3.jpg"
import planta1 from "./components/Item/assets/croton.jpg"
import planta2 from "./components/Item/assets/monstera.jpg"
import planta3 from "./components/Item/assets/schefflera.jpg" */

const productos = [
    {
        "img": mates1,
        "id": "1",
        "nombre": "MATE CELESTE",
        "precio": 1200,
        "descripcion": "Mate de ceramica moldeado a mano, con detalles en relieve y flores celestes.",
        "stock": 80,
        "categoria": "mates"
    },
    {
        "img": mates2,
        "id": "2",
        "nombre": "MATE LISO",
        "precio": 1200,
        "descripcion": "Mate de ceramica moldeado a mano, con detalles en relieve y flores rosadas.",
        "stock": 50,
        "categoria": "mates"
    },
    {
        "img": mates3,
        "id": "3",
        "nombre": "MATE ROSADO",
        "precio": 1200,
        "descripcion": "Mate de ceramica moldeado a mano, con detalles en relieve y color liso.",
        "stock": 70,
        "categoria": "mates"
    },
    {
        "img": almohadon1,
        "id": "4",
        "nombre": "ALMOHADON BORDADO",
        "precio": 1500,
        "descripcion": "Almohadon 50cm x 40cm, rayado con apliques sublimados, varios colores.",
        "stock": 15,
        "categoria": "almohadones"
    },
    {
        "img": almohadon2,
        "id": "5",
        "nombre": "ALMOHADON RAYADO",
        "precio": 1500,
        "descripcion": "Almohadon 50cm x 40cm, rayado con bordes con apliques, varios colores.",
        "stock": 15,
        "categoria": "almohadones"
    },
    {
        "img": almohadon3,
        "id": "6",
        "nombre": "ALMOHADON CON BORDE",
        "precio": 1500,
        "descripcion": "Almohadon 50cm x 40cm, con apliques, bordados y flecos de broderi.",
        "stock": 15,
        "categoria": "almohadones"
    },
    {
        "img": canastos1,
        "id": "7",
        "nombre": "CANASTO TEJIDO",
        "precio": 1600,
        "descripcion": "Canastos de produccion artesanal, armados con paja verde.",
        "stock": 10,
        "categoria": "canastos"
    },
    {
        "img": canastos2,
        "id": "8",
        "nombre": "CANASTO BICOLOR",
        "precio": 1600,
        "descripcion": "Canastos de produccion artesanal, armados con paja de dos colores.",
        "stock": 12,
        "categoria": "canastos"
    },
    {
        "img": canastos3,
        "id": "9",
        "nombre": "CANASTO TRENZADO",
        "precio": 1600,
        "descripcion": "Canastos de produccion artesanal, armados con paja trenzada.",
        "stock": 10,
        "categoria": "canastos"
    },
    {
        "img": planta1,
        "id": "10",
        "nombre": "CROTON",
        "precio": 1800,
        "descripcion": "Planta croton de tamaño mediano o grande. Se entrega lista para transplantar.",
        "stock": 5,
        "categoria": "plantas"
    },
    {
        "img": planta2,
        "id": "11",
        "nombre": "MONSTERA",
        "precio": 1800,
        "descripcion": "Planta monstera de tamaño mediano o grande. Se entrega lista para transplantar.",
        "stock": 5,
        "categoria": "plantas"
    },
    {
        "img": planta3,
        "id": "12",
        "nombre": "SCHEFFLERA",
        "precio": 1800,
        "descripcion": "Planta schefflera de tamaño mediano o grande. Se entrega lista para transplantar.",
        "stock": 5,
        "categoria": "plantas"
    }
]

export const obtenerProductos = ()=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (productos)
        }, 500);
    })
}

export const obtenerProductoById = (itemId)=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (productos.find (prod => prod.id === itemId))
        }, 500);
    })
}

export const obtenerCategoria = (categoriaId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve (productos.filter ((prod) => prod.categoria === categoriaId))
        }, 500);
    })
}