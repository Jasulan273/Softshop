import React from 'react'
import './Advertisment.css'
import ads from '../../assets/ads.png'
const Advertisment = () => {
  return (
    <div className='advertisment'>
      <div className="container">
        <div className="ads_content">
          <div className="ads_text">
            <h1>Refillable Discbound Journals</h1>
            <h2>Heirloom quality you'll be holding onto for life</h2>
            <a href="">Shop the collection →</a>
          </div>
          <img src={ads} alt="" className="ads_img" />
        </div>
      </div>
    </div>
  )
}

export default Advertisment