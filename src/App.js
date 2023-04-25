import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

 export function App () {
  return (
    <div>
      <BrowserRouter>
       <NavBar />
       <Routes>
        <Route path='/' element={<ItemListContainer greeting= {"Bienvenidos a Estudio Crea"}/>}/>
        <Route path='/categoria/:categoriaId' element= {<ItemListContainer />}/>
        <Route path='/item/:itemId' element= {<ItemDetailContainer />} />
        <Route path='/*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

