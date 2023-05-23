import React from 'react'
import { useState } from 'react';
import './Link.css'

const Link = () => {
  const [activeLink, setActiveLink] = useState('New Arrivals');

  const handleLinkClick = (link) => {
    event.preventDefault();
    setActiveLink(link);
  };
  return (
    <div className='container'>
      <div className="title">
        <a
          href=""
          className={`title_link ${activeLink === 'New Arrivals' ? 'active' : ''}`}
          onClick={() => handleLinkClick('New Arrivals')}
        >
          New Arrivals
        </a>
        <a
          href=""
          className={`title_link ${activeLink === 'Analog' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Analog')}
        >
          Analog
        </a>
        <a
          href=""
          className={`title_link ${activeLink === 'Final Stock' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Final Stock')}
        >
          Final Stock
        </a>
        <a
          href=""
          className={`title_link ${activeLink === 'Best Sellers' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Best Sellers')}
        >
          Best Sellers
        </a>
        <a
          href=""
          className={`title_link ${activeLink === 'Clothing' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Clothing')}
        >
          Clothing
        </a>
        <a
          href=""
          className={`title_link ${activeLink === 'Objects' ? 'active' : ''}`}
          onClick={() => handleLinkClick('Objects')}
        >
          Objects
        </a>
      </div>
    </div>
  )
}

export default Link