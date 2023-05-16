import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { Checkout } from './components/Checkout/Checkout';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

 export function App () {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
       <NavBar />
       <Routes>
        <Route path='/' element={<ItemListContainer greeting= {"Bienvenidos a Estudio Crea"}/>}/>
        <Route path='/categoria/:categoriaId' element= {<ItemListContainer />}/>
        <Route path='/item/:itemId' element= {<ItemDetailContainer />} />
        <Route path='/cart' element= {<Cart />}/>
        <Route path='/checkout' element= {<Checkout />}/>
        <Route path='/*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      <Footer />
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

