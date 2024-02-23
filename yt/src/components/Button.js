import React from 'react'

const Button = ({info}) => {
  return (
    <div>
        <button className='py-2 px-5 rounded-lg bg-gray-100 w-max text-sm font-semibold'>
          {info?.snippet?.title}
        </button>
    </div>
  )
}

export default Button