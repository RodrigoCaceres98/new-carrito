import React from 'react'
import { Fragment } from 'react'

export const Header = ({ titulo }) => {
  return (
    <Fragment>
      <div className='bg-white h-25'>
        <h1 className='text-center py-4'>{titulo}</h1>
      </div>

    </Fragment>
  )
}
