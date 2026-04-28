import React from 'react'

const Card = ({children="Your content goes here", title="Title", footer}) => {
  return (
    <div className='bg-white shadow-lg p-8 rounded-lg border border-gray-100 space-y-2'>
        <h1 className='text-lg font-semibold'>{title}</h1>
        <div className='text-gray-500'>{children}</div>
        {
            footer &&
            <div className='mt-4'>
                {footer}
            </div>
        }
    </div>
  )
}

export default Card