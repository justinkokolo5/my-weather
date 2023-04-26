import { formatToLocalTime, iconUrlFromCode } from '@/api/api'
import React from 'react'

export default function TemparatureAndDetails({weather: {
    details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone
}}) {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>{details}</p>
        </div>
        <div className='flex flex-row items-center justify-between py-3 text-white'>
           <image 
              src={iconUrlFromCode(icon)}
              alt='icon'
              className='w-20'
           /> 
           <p className='text-5xl'>{`${temp.toFixed()}°`}</p>
           <div className='flex flex-col space-y-2'>
               <div className='flex items-center font-light text-sn'> 
                  Real fell: 
                  <span className='ml-1 font-medium'>{`${temp.toFixed()}°`}</span>
               </div>
               <div className='flex items-center font-light text-sn'> 
                  Wind Speed: 
                  <span className='ml-1 font-medium'>{`${speed.toFixed()}km/h`}</span>
               </div>
               <div className='flex items-center font-light text-sn'> 
                  Humidity: 
                  <span className='ml-1 font-medium'>{`${humidity.toFixed()}%`}</span>
               </div>
           </div>
        </div>
        <div className='flex flex-row items-center justify-center py-3 space-x-2 text-sm text-white'>
           {/* <UilSun />  */}
           <p className='font-light'>Rise: <span className='ml-1 font-medium'>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span></p> 
           <p className='font-light'>|</p> 
            {/* <UilSun />  */}
            <p className='font-light'>Set: <span className='ml-1 font-medium'>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span></p> 
           <p className='font-light'>|</p>
            {/* <UilSun />  */}
            <p className='font-light'>High: <span className='ml-1 font-medium'>{`${temp_max.toFixed()}km/h`}</span></p> 
           <p className='font-light'>|</p>
            {/* <UilSun />  */}
            <p className='font-light'>Low: <span className='ml-1 font-medium'>{`${temp_min.toFixed()}km/h`}</span></p> 
           <p className='font-light'>|</p>
        </div>
    </div>
  )
}
