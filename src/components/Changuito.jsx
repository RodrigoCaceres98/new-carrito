import React, { Fragment } from 'react'
//import '../style/master';
import { Producto } from './Producto';

export const Changuito = ({ changuito }) => {
    return (
        <Fragment>
            <h3 className='text-center py-3'>Changuito de compras</h3>
            <div>
                {changuito.map(producto =>
                    <Producto
                        key={producto.id}
                        producto={producto} />)}

            </div>
        </Fragment>

    )
}
