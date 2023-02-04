import React from 'react';



const Producto = (props) => {
    const { data, addToCart } = props;

    return (

        <div className='col-m-6 col-md-4 container mt-5' >
            <div className='itemContainer'>
                 <img src={data.src} style={{maxWidth: 200, height: 200}} alt="..." /> 
                
                <h4>{data.nombre}</h4>
                <h5>$ {data.precio}</h5>
                <button onClick={() => addToCart(data.id)} className='btn btn-warning btn-sm text-light'>AGREGAR</button>
                </div>
        </div>







    );
};

export default Producto;
