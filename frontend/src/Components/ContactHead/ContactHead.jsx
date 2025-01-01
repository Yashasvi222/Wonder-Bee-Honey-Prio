import React from 'react'
import Telephonebee from '../Assets/bee_telephone.png'
import './ContactHead.css'

const Store_head = () => {
  return (
    <>
      <div className="store-head">
        <img src={Telephonebee} alt="Telephone Bee" />
        <p className="store">Contact Us</p>
      </div>
    </>
  )
}

export default Store_head
