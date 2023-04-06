import React from 'react'

import Container from './common-componets/Container';
import SingleLeft from './SingleLeft';
import SingleRight from './SingleRight';

export default function jobsPage({getJobs , setJobs ,jobs}) {
const companyName = window.location.pathname.replace('/', '');

const singleProduct = getJobs.filter((item, index)=>{
  if(item.name== companyName){
    return setJobs(item);
  }
return item.id== companyName;
});
  return (
    <div className='flex flex-wrap -mx-4 w-[calc(100% + 32px )]'>
      <Container className="w-full flex flex-wrap">
        <SingleLeft jobs={jobs} getJobs={getJobs} setJobs={setJobs}/ >
      <SingleRight jobs={jobs}/>

  </Container>
    </div>
  )
}
