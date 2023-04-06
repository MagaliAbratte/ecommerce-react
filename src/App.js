import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

 export function App () {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting= {"Bienvenidos a Estudio Crea"}/>
    </div>
  );
}

/* export default App; */
