import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { NavLink } from 'react-router-dom'

const Appliance = ({ addToCart }) => {

    const [data] = useContext(Store)

    const handleAddToCart = (item) => {
      addToCart(item);
      console.log(addToCart);
    };
  return (
    <>

<div className='parentside'>
        <div className='leftchild'>
          <div id='homedata'>
        {
          data.filter((e) => e.category === 'appliance').map((item, index) => {
            return (
              <>
                <div id='homedatacontent'>
                  <NavLink to={`/dynamic/${item.id}`}>
                    <img className='imageheighthome' src={item.image} alt='not found' />
                    <div className='itemname'>{item.name.slice(0, 20)}...</div>
                    <div className='itemrating'>{item.rating}</div>
                    <div className='itemprice'>{item.price}</div>
                  </NavLink>
                  <button className='homecartbtm' onClick={() => handleAddToCart(item)}>Add To Cart</button>
                  {/* <p className='itemdesc descriptionwidth'>{item.description.slice(0, 150)}...</p> */}

                </div>
              </>
            )
          })
        }
      </div>
        </div>
      </div>
      
    </>
  )
}

export default Appliance