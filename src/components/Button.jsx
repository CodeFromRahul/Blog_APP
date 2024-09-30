import React from 'react'

const Button = ({
    children,
    type='button',
    className="",
    bgcolor='bg-blue-500',
    ...props

}) => {
  return (
   <button className={`px-4 py-3 rounded-lg ${bgcolor} ${className}`} {...props}>
    {children}
   </button>
  )
}

export default Button