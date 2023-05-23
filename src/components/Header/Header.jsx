import React from 'react'
import './Header.css'
import Navbar from './Navbar/Navbar';


const Header = () => {
  return (
    <div className='Header'>
      <Navbar />
      <div className="header_main">
        <div className="container">
          <div className="header_text">
            <h2>Analog: The Simplest Productivity System</h2>
               <a href="" className='shop_now'>
              <h2>Shop now</h2>
              <box-icon name='right-arrow-alt' color='#ffffff' ></box-icon>
               </a>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Header