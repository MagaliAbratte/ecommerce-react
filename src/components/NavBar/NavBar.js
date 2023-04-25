import { CartWidget } from "./CartWidget/CartWidget"
import logo from "./assets/logo.png"
import { NavLink, Link } from "react-router-dom"

export const NavBar = () =>{
    return (
        <nav className="contenedor-navbar">
            <div className="flex-navbar">
              <div className="flex-logo-prod">
                <Link to='/'>
                <img src={logo} className="logo" alt="Logo Estudio Crea"/>
                </Link>
                <div className= "productos-opciones">
                  <NavLink to= {'/categoria/mates'} className={({isActive}) => isActive ? "boton-activo" : "boton"}>MATES</NavLink>
                  <NavLink to= {'/categoria/almohadones'} className={({isActive}) => isActive ? "boton-activo" : "boton"}>ALMOHADONES</NavLink>
                  <NavLink to= {'/categoria/canastos'} className={({isActive}) => isActive ? "boton-activo" : "boton"}>CANASTOS</NavLink>
                  <NavLink to= {'/categoria/plantas'} className={({isActive}) => isActive ? "boton-activo" : "boton"}>PLANTAS</NavLink>
                </div>
              </div>
            <CartWidget />
            </div>
        </nav>
    )
}