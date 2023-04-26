import React from 'react'
import { iconUrlFromCode } from '@/api/api';

export default function Forecast({title, items}) {
   console.log(items)
  return (
    <div>
        <div className='flex items-center mt-6'>
            <p className='font-medium text-white uppercase'>{title}</p>
        </div>
        <hr className='my-2'/>
        
        <div className='flex flex-row items-center justify-between text-white'>
        {items.map((item) => (
           <div className='flex flex-col items-center justify-center'>
           <p className='text-sm font-light'>{item.title}</p>
            <img 
              src={iconUrlFromCode(item.icon)} 
              alt="Weather Icon" 
              className='w-12 my-1'
              />
              <p className='font-medium'>{`${item.temp.toFixed()} °`}</p>
          </div> 

          
        ))}
           
         </div>
    </div>
  )
}
