PROYECTO FINAL - CURSO REACT JS - CODERHOUSE
Ecommerce para Estudio Crea.

#CARACTERISTICAS Y DESCRIPCION DEL PROYECTO:

Proyecto desarrollado utilizando React.Js como entrega final del curso.
En el mismo se pueden visualizar un ecommerce, con productos de decoracion (almacenados en la base de datos de Firebase) los cuales se pueden seleccionar para comprar, ver sus detalles, almacenarlos en el carrito y generar una orden de compra, tomando datos del cliente a traves de un formulario. 

Consta de una pagina principal, donde se muestran mediantes cards los productos ofrecidos por el ecommerce. Desde la misma se puede navegar a los diferentes productos por categorias o de forma individual y acceder al carrito de compras; ademas, en la parte inferior se puede acceder desde el footer al link de la pagina de Instagram del emprendimiento, y a un telefono de contacto.
En el detalle de cada producto se muestra una imagen real del mismo, su descripcion y el precio por unidad. Desde el mismo podemos seleccionar la cantidad de productos deseados mediante un contador, agregar lo seleccionado al carrito de compras y decidir si terminar la compra o volver a la pagina principal para agregar mas productos.
Una vez terminado el proceso de seleccion, se accede al carrito de compras, en el cual se muestra el detalle de los productos, cantidad elegida, precio por unidad, y precio total. En esta instancia, es posible eliminar individualmente los productos del carrito, vaciar completamente el carrito o generar una orden de compra.
Al generar una orden de compra, mediante un formulario se solicita al usuario datos como nombre, apellido, telefono y email, los cuales se almacenan en Firebase como 'orders', y se devuelve al usuario un codigo (id) correspondiente a su orden.

#REQUISITOS E INSTALACION:

- LIBRERIAS, FRAMEWORKS Y DEPENDENCIAS, con sus versiones:
 - "node.js" v18.15.0, 
 - "react": "^18.2.0", 
 - "react-dom": "^18.2.0", 
 - "react-router-dom": "^6.10.0", 
 - "bootstrap": "^5.2.3", 
 - "react-bootstrap": "^2.7.4", 
 - "firebase": "^9.22.0".
 
 - COMANDOS:
  - Crear una nueva app React: npx create-react-app name, 
  - Develope mode: npm start, 
  - React router dom: npm install react-router-dom, 
  - Deploy: npm run build, 
  - React-bootstrap: npm install react-bootstrap bootstrap, 
  - Firebase: npm install firebase.
