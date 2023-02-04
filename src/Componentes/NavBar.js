import React from 'react';
import { Link, } from 'react-router-dom';



const NavBar = () => {
    return (
        <div>
            <nav className="navbarItem">
                <h1 className='iconoMarca'>AliArt</h1>
            <Link className='navLink' to='/'>Inicio</Link>
            <Link className='navLink'to='/Carrito'>Productos</Link>
            </nav>

        </div>
    );

    }
    export default NavBar;