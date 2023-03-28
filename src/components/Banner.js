import React from 'react';
import Container from './common-componets/Container';
import bannerimg from '../assests/images/banner.png'
import Work from './common-componets/SvgIcon';
export default function Banner({compHandler , ClickHandler}) {
  return (
  <section>
    <Container>
      <div className='mb-[42px] relative flex justify-center items-center'>
<img className='w-full h-[138px] object-cover' src={bannerimg}/>
<div className='absolute w-full rounded shadow-sm overflow-hidden max-w-[790px]'>
  <div className='flex h-14 p-1 bg-white w-full relative justify-center items-center'>
    <Work className='w-5 h-5 fill-[#B9BDCF] ml-4 mr-2'/>
    <input type='search ' onChange={compHandler}  placeholder='Title, companies, expertise or benefits ' className=' text-[#B9BDCF] text-sm font-normal h-full w-full outline-none' />
    <button onClick={ClickHandler} className='bg-[#1E86FF] h-full w-36 text-center text-white text-base font-medium rounded '>Search</button>
  </div>
</div>
      </div>
    </Container>
  </section>
  )
}
