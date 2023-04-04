import React from 'react'

import Container from './common-componets/Container';
import SingleLeft from './SingleLeft';
import SingleRight from './SingleRight';

export default function jobsPage({getJobs , setJobs ,jobs}) {
const indexvalue = window.location.pathname.replace('/', '');

const singleProduct = getJobs.filter((item, index)=>{
  if(item.id== indexvalue){
    return setJobs(item);
  }
return item.id== indexvalue;
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
