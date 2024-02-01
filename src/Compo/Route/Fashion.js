import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { NavLink } from 'react-router-dom'

const Fashion = () => {

    const [data] = useContext(Store)
    console.log(data);
  return (
    <>

<div className='parentside'>
        <div className='leftchild'>
          <div className='toppost'>Fashion</div>
          <div className='hrline'></div>

<div id='homedata'>
        {
          data.filter((e) => e.category === 'fashion').map((item, index) => {
            return (
              <>
                <div id='homedatacontent'>
                  <NavLink to={`/dynamic/${item.id}`}>
                    <img className='imageheighthome' src={item.image} alt='not found' />
                    <div className='itemname'>{item.name.slice(0, 20)}...</div>
                    <div className='itemrating'>{item.rating}</div>
                    <div className='itemprice'>{item.price}</div>
                  </NavLink>
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

export default Fashion