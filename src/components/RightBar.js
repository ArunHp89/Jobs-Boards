import React from 'react';
import { Link } from 'react-router-dom';
import { Error, World } from './common-componets/SvgIcon';
import moment from 'moment';

export default function RightBar({jobs}) {
  const convert = (inputDate) => {
    let date = new Date(inputDate);   

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return year + '.' + month + '.' + day;
  }
  return (
    <div className='lg:w-[64%] w-full px-4 mt-7 lg:mt-0'>
      {jobs?.length>=1? jobs?.map((item , index)=>{
        return(
          <div key={`${item?.id}`} className='w-full mb-8 '>
          <div className='w-full flex md:flex-nowrap flex-wrap bg-white shadow-sm p-3 justify-between'>
      <div className='flex'>
      <Link to={`${item?.name}`}>   <img src={item?.logo} className='w-[100px] h-[100px]'/></Link>
      <div className='px-4 '>
        <span className='text-[#334680] text-xs font-bold mb-[6px]'>{item.name}</span>
        <Link to={`${item?.name}`}>  <h3 className='text-[#334680] text-lg font-normal mb-[18px]'>{item?.title}</h3></Link>
    {item?.fulltime=='true'?  
     <Link to={`${item?.name}`}> 
    <p className='text-[#334680] border-[#334680] border rounded text-xs p-[6px] font-bold inline-block hover:text-white hover:bg-[#334680] transition-all' >Full time</p> </Link> :null}
   
      </div>
      </div>
      <div className='flex items-end md:w-auto w-full mt-5 md:mt-0 md:pl-0 pl-28'>
        <div className="inline-flex pr-7">
          <World className="w-4 h-4 fill-[#B9BDCF]"/><p className='text-[#B9BDCF] text-xs mb-0 ml-2'>{item?.city}</p>
        </div>
        <div className="inline-flex">
          <World className="w-4 h-4 fill-[#B9BDCF]"/><p className='text-[#B9BDCF] text-xs mb-0 ml-2'>
          {moment(new Date(item?.date)).fromNow()}
          </p>
        </div>
      </div>
          </div>
        </div>
        )
      }):<div className='text-center font-sm flex justify-center items-center text-[#334680] font-medium p-5 rounded shadow-sm bg-white '><Error className='w-5 h-5 mr-2 fill-[#334680]'/> No data found </div>}

  </div>
  )
}
