import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cardproducts from './components/Cardproducts'
import Promard from './components/Promard'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className='bg-[#3B3F6C] lg:bottom-0 relative bottom-[96px]'>
      <div>
        <h1 className='custom-font sm:text-[45px] sm:w-[1211px] text-[16px]  text-center ml-auto mr-auto sm:pt-20 sm:pb-20 text-[#D9D3E8] pt-20 pb-20'>Welcom to a world where skincare meets indulgence  At allYoung  we believe in the transformative power of self-care</h1>
      </div>
    </div>
    <Cardproducts/>
    <Promard/>
    <Footer/>
    </>
    
  )
}

export default App