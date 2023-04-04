import React from 'react'
import { Link } from 'react-router-dom';
import { Back } from './common-componets/SvgIcon';
export default function SingleLeft({getJobs ,jobs , setJobs}) {
  return (
    <div className='lg:w-[36%] px-4 relative mb-7 lg:mb-0'>
    <Link to='/'>
     <p className='text-[#1E86FF] text-sm font-medium   flex items-center' onClick={()=>setJobs(getJobs)}><Back className="fill-[#1E86FF] h-6"/> Back to search</p>
     </Link>
     <h3 className='text-[#B9BDCF] text-sm font-bold uppercase mt-9 mb-4'>HOw to Apply</h3>
     <p className='text-[#334680] text-sm font-medium'>Please email a copy of your resume and online portfolio to 
       <a className='text-[#1E86FF]' href={`mailto:${jobs?.author}`}> {jobs?.author}</a></p>
    </div>
  )
}
