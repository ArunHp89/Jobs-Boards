import React from 'react'
import { World } from './common-componets/SvgIcon';
export default function SingleRight({jobs}) {
  return (
    <div className='lg:w-[64%] px-4'>
    <div className='flex flex-wrap gap-3'><h1 className='text-[#334680] text-2xl font-bold mr-4'>
      {jobs?.title}</h1>{jobs?.fulltime? <p className="text-[#334680] border-[#334680]
     border rounded text-xs p-[6px] font-bold inline-block " href="1">Full time</p>:null}
    </div>
    <div className='flex mt-9'>
      <img className='w-[42px] h-[42px] object-cover' src={jobs?.logo} />
      <div className='ml-3'>
        <h3 className='text-[18px] font-bold text-[#334680]'>{jobs?.name}</h3>
        <h6 className='flex mt-2 text-[#B9BDCF] text-xs '><World className='w-3 mr-1 fill-[#B9BDCF]'/>{jobs?.city} </h6>
      </div>
      </div>
      <div className='text-[#334680] text-base mt-[32px]'>
        {jobs?.content}
      </div>
    </div>
  )
}
