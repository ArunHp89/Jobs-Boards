import React from 'react'
import { World } from './common-componets/SvgIcon'
export default function LeftBar({cityList , CityHandler , CitySearchHandler , clear , ClearData , fullTime}) {
  return (
    <div className='w-[36%] px-4 relative'>
      <div className='sticky top-8 left-0'>
    <div className='flex items-center mb-8'>
      <input type='checkbox' className='border border-[#B9BDCF] h-[18px] w-[18px]' value='Full time' onClick={fullTime}/>
      <label className='text-[#334680] text-sm font-medium ml-3'>Full time</label>
      </div>
      <div>
        <h2 className='text-[#B9BDCF] text-sm font-bold mb-3'>Location</h2>
      </div>
      <div className='w-full bg-white rounded shadow-sm  h-12 px-[14px] flex items-center mb-6'>
     <World className='w-4 h-4 fill-[#B9BDCF] mr-4'/>
     <input onChange={CitySearchHandler} type='search' placeholder='City, state, zip code or country' className='w-full text-xs text-[#B9BDCF] font-normal outline-none h-full'/>
      </div>
      <div className='px-[14px]'>
        {clear===true?<div className='text-right'><button className='text-red-600 border-red-600 border rounded text-xs p-[6px] font-bold inline-block hover:text-white hover:bg-red-600 transition-all' onClick={ClearData}>Clear</button></div>:null}
        {cityList?.map((item , index)=>{
          return (
            <div key={index} className='flex items-center mb-4'>
<input onClick={CityHandler} type="radio" id={item.city} name="city" className='w-[18px] h-[18px] border-[#B9BDCF]' defaultValue={item.city} />
         <label htmlFor={item.city} className='font-sm text-[#334680] font-medium ml-3'>{item.city}</label>
</div>
          )
        })}
      </div>
    </div>
    </div>
  )
}
