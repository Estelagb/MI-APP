import React, { useReducer, useEffect } from 'react';
import { carritoInitialState, carritoReducer } from './Reducer';
import Producto from './Producto';
import { TYPES } from './Actions';
import ItemCarrito from './ItemCarrito';
import axios from 'axios';
       
const Carrito = () => {

    const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);




    const actualizarEstado = async () => {
        const productosoURL = "http://localhost:3004/productos";
        const carritoURL = "http://localhost:3004/carrito";


       
        const listaProductos = await axios.get(productosoURL);
        const carrito = await axios.get(carritoURL);


        const nuevosProductos = listaProductos.data;
        const nuevoCarrito = carrito.data;







        
        dispatch({ type: TYPES.READ_STATE, payload: [nuevosProductos, nuevoCarrito] })

    };
    useEffect(() => {
        actualizarEstado();

    }, []) 
            

        const { carrito, productos} = state;
        const addToCart = (id) => {
        
            dispatch ({type: TYPES.ADD_TO_CART, payload: id});
        };
        
        const deleteFromCart = (id, eliminarTodos)=>{
            if(eliminarTodos){
                dispatch ({type: TYPES.REMOVE_ALL_ITEMS, payload:id})
            }
            else{
            dispatch({type: TYPES.REMOVE_ITEM, payload: id})
         }
        };
        const clearCart = () => {
            dispatch({type: TYPES.CLEAR_CART});
        }
        
    return (
        <div className='container-fluid ms-2 mt-5'>
            <h1>Nuestros productos</h1>
            
              <div className='row'>
                {productos.map((producto) => { 
                return (
                <Producto key={producto.id} data={producto} addToCart={addToCart}/>);
            })} 
              </div>
            
            <h2>Carrito</h2>
            <div className='row'>{carrito.map((item, index) => {
                                return <ItemCarrito key={index} data={item} deleteFromCart={deleteFromCart}/>;
                            })}</div>
            <button onClick={()=>clearCart()} className='btn btn-warning'>Vaciar carrito</button>
            
        </div>
    );
}

export default Carrito;

