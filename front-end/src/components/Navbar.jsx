import React from 'react'
import { HiBars3 } from "react-icons/hi2";
import line2 from '../assets/Line 2.png'
import styles from '../styles';

function Navbar() {
  return (
    <nav className=''>
      <div className='flex justify-center gap-12 sm:gap-56 mt-10  text-[#452E5D]'> 
         
         <div> 
          <h1 className="custom-font text-2xl sm:text-4xl">allYoung</h1>
         </div>

         <ul className='hidden text-2xl sm:flex sm:gap-[53px]  gap-0'>
          <li className={`${styles.hoverli}`}><a href="">Home</a></li>
          <li className={`${styles.hoverli}`}><a href="">Skin type</a></li>
          <li className={`${styles.hoverli}`}><a href="">About us</a></li>
          <li className={`${styles.hoverli}`}><a href="">Blog</a></li>
         </ul>
         <div className='sm:hidden text-[25px]'>
         <HiBars3 />
         </div>

          <div>
            <button className='text-2xl sm:text-4xl underline'>Buy now</button>
          </div>
      </div>
      <div className={`${styles.line2position}`}>
        <img src={line2} alt="" />
      </div>
    </nav>
  )
}

export default Navbar