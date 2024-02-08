import React from 'react'
import orderplaced from '../Imageh/ORDERPLACED1.gif';

const OrderPlaced = () => {
  return (
    <>
    <h2 className="cartheading">ORDERPLACED</h2>
    <div className='imagegif'>
        <img className='orderplaced' src={orderplaced} alt="my-gif" />
      </div>
    </>
  )
}

export default OrderPlaced