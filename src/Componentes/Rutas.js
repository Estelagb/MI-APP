import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from './Inicio';
import NavBar from './NavBar';
import Error from './Error';
import Carrito from './Carrito';
import Footer from './Footer';



const Rutas = () => {
    return (
        <div>
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Carrito" element={<Carrito />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
        </div>
    );

}

export default Rutas;