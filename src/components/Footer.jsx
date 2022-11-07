import React from 'react'
import { Fragment } from 'react'

export const Footer = () => {
    const fecha = new Date()

    return (
        <div className='footer'>
            <h4>Derechos Reservados Ⓡ {fecha.getFullYear()}</h4>
        </div>


    )
}
