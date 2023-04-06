import { CartWidget } from "./CartWidget/CartWidget"
import logo from "./assets/logo.png"

export const NavBar = () =>{
    return (
        <nav className="contenedor-navbar">
            <div className="flex-navbar">
              <div className="flex-logo-prod">
                <img src={logo} className="logo" alt="Logo Estudio Crea"/>

                <div className= "productos-opciones">
                  <button className="boton">CANASTOS</button>
                  <button className="boton">ALMOHADONES</button>
                  <button className="boton">PLANTAS</button>
                  <button className="boton">MATES</button>
                </div>
              </div>
            <CartWidget />
            </div>
        </nav>
    )
}