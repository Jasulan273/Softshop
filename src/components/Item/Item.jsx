import React from 'react'
import './Item.css'
const Item = (props) => {
  
  return (
    <div className='item'>
      
        <img src={`${props.imageUrl}`} alt="" />
        <h3>{props.title}</h3>
        <p>${props.price}</p>
    </div>
  )
}

export default Item