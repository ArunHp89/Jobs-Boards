import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layput(props) {
  return (
  <section className='bg-[#F6F7FB]'>
    <Header/>
    {props.children}
    <Footer/>
  </section>
  )
}
