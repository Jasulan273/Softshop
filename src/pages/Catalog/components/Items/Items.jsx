import React from 'react'
import './Items.css'
import Item from '../../../../components/Item/Item'
import Data from '../../../../logic/Data'
const Items = () => {

    const Items = Data.map((item) => (
        <Item
            key={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
        />
    ));
    return (
        <div className="container">
            <div className='items'>{Items}</div>
        </div>

    )
}

export default Items