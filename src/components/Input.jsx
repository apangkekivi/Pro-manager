import React from 'react'
import { forwardRef } from 'react';

const classes = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

const Input = forwardRef(({ label,textarea, ...props }, ref) => {
  return (
    <p className='flex flex-col my-4 gap-1'>
        <label className='text-sm font-bold uppercase text-stone-500' htmlFor="">{label}</label>
        {textarea ? <textarea ref={ref} className={classes} {...props}/> : <input ref={ref} className={classes} {...props}/>}
    </p>
  )
})

export default Input
