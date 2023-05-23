import React from 'react'
import './Footer.css'
import logo from '../../assets/footer_logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_content">
         <div className="links">
          <a href="" className="link">Shop</a>
          <a href="" className="link">Journal</a>
          <a href="" className="link">About</a>
          <a href="" className="link">Reviews</a>
          <a href="" className="link">Help / FAQ</a>
          <a href="" className="link">Contact Us</a>
         </div>
         <div className="info">
          <div className="info_text">
            <div className='text'>
            <h3>© Ugmonk 2021</h3>
            <h3>All images and content may not be used without permission</h3>
            </div>
            <img src={logo} alt="" />
          </div>
          
          <div className="social_network">
          <a href=""><box-icon name='instagram-alt' type='logo' size='md' ></box-icon></a>
          <a href=""><box-icon name='twitter' type='logo' size='md' ></box-icon></a>
          <a href=""><box-icon type='logo' name='facebook-square' size='md'></box-icon></a>
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Footer