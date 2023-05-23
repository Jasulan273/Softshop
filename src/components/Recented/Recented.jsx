import React from 'react'
import './Recented.css'
import Item from '../Item/Item'
import Data from '../../logic/Data.js'

const Recented = () => {
  const lastFourItems = Data.slice(-4);

  const lastItems = lastFourItems.map((item) => (
    <Item
      key={item.id}
      title={item.title}
      price={item.price}
      imageUrl={item.imageUrl}
    />
  ));

  return (
    <div className="container">
      <div className='recented'>
        <h1 className='title'>Recented</h1>
        <div className="last_added">
          {lastItems}

        </div>
      </div>
    </div>
  )
}

export default Recented