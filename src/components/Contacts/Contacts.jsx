import React from 'react'
import './Contacts.css'
const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <form action="">
          <h1>Stay in the loop</h1>
          <h3>Be the first to know when new products drop and get behind-the-scenes content straight from Ugmonk’s founder.</h3>
          <div className="input">
            <input type="text" placeholder='Email...'/>
            <button>→</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts