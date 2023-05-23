import React from 'react'
import './Catalog.css'
import Link from './components/Links/Link'
import Navbar from '../../components/Header/Navbar/Navbar'
import Items from './components/Items/Items'
const Catalog = () => {
  return (
    <div className='catalog'>
      <Navbar />
      <Link />
      <Items />
    </div>
  )
}

export default Catalog