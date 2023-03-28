import React from 'react';
import Comp from './../assests/images/banner.png';
import { Error, World } from './common-componets/SvgIcon';
export default function RightBar({jobs}) {
  return (
    <div className='w-[64%] px-4'>
      {console.log(jobs)}
      {jobs?.length>=1? jobs?.map((item,index)=>{
        return(
          <div key={index} className='w-full mb-8 '>
          <div className='w-full flex bg-white shadow-sm p-3 justify-between'>
      <div className='flex'>
      <img src={item?.logo} className='w-[100px] h-[100px]'/>
      <div className='px-4 '>
        <span className='text-[#334680] text-xs font-bold mb-[6px]'>{item.name}</span>
        <h3 className='text-[#334680] text-lg font-normal mb-[18px]'>{item?.title}</h3>
    {item?.fulltime=='true'?    
    <a className='text-[#334680] border-[#334680] border rounded text-xs p-[6px] font-bold inline-block hover:text-white hover:bg-[#334680] transition-all' href={item.id}>Full time</a>:null}
      </div>
      </div>
      <div className='flex items-end'>
        <div className="inline-flex pr-7">
          <World className="w-4 h-4 fill-[#B9BDCF]"/><p className='text-[#B9BDCF] text-xs mb-0 ml-2'>{item?.city}</p>
        </div>
        <div className="inline-flex">
          <World className="w-4 h-4 fill-[#B9BDCF]"/><p className='text-[#B9BDCF] text-xs mb-0 ml-2'>5 days ago</p>
        </div>
      </div>
          </div>
        </div>
        )
      }):<div className='text-center font-sm flex justify-center items-center text-[#334680] font-medium p-5 rounded shadow-sm bg-white '><Error className='w-5 h-5 mr-2 fill-[#334680]'/> No data found </div>}

  </div>
  )
}
