import React from 'react'
import { Fragment } from 'react'

export const Producto = ({ producto, productos, changuito, setChanguito }) => {

    const { id, nombre, precio } = producto;

    const SeleccionarProducto = (id) => {
        const producto = productos.filter(
            producto => producto.id === id)[0];
        if (changuito.filter(producto => producto.id === id).length === 0) {
            setChanguito([...changuito, producto])
        }
    }
    const EliminarProducto = (id) => {
        const producto = changuito.filter(producto => producto.id != id);
        console.log(producto)
       // setChanguito(producto);
    }

    return (
        <Fragment>
            <div className="card w-50 py-1">
                <h5 className="card-header py-1"><p className='fs-3' >{nombre}</p></h5>
                <div className="card-body tarjeta py-1">
                    <p className='fs-5 my-1'> <span className='fw-bolder'>ID:</span>  {id}</p>
                    <p className='fs-5 my-1'><span className='fw-bolder'>Precio:</span> {precio}</p>
                    {productos
                        ?
                        <button
                            type='button'
                            onClick={() => SeleccionarProducto(id)}
                            className='btn btn-primary pt-2'
                        >Comprar</button>
                        :
                        <button
                            type='button'
                            onClick={() => EliminarProducto(id)}
                            className='btn btn-primary pt-2'
                        >Eliminar</button>
                    }
                </div>
            </div>




            <br />
        </Fragment>
    )
}
