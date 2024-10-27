import React ,{useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
},ref) {
    const id = useId();
  return (
    <div className='w-full'>
    {
        label && <label htmlFor={id} className=''>
            
        </label>
        
    }
    <select {...props} id={id} ref={ref} className={`py-2 px-3 rounded-lg bg-white outline-none text-black focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className} `}></select>
      {
        options?.map((option)=><option key={option} value={option}>{option}</option>)
      }
    </div>
  )
}

export default React.forwardRef(Select)
