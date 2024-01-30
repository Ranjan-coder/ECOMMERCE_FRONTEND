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
          {data.filter((e) => e.category === 'fashion').map((item, index) => {
            return (
              <>

                <div className='parentcontent'>
                  <div className='childc1'>

                    <NavLink to={`/dynamic/${item.id}`}>
                      <img className='imageheight' src={item.image} alt='not found' />
                    </NavLink>
                  </div>

                  <div className='childc2'>
                    <NavLink to={`/dynamic/${item.id}`}>
                      <h2 className='itemheading'>{item.name}</h2>
                    </NavLink>
                    <p className='itemdesc'>{item.description.slice(0, 130)}...</p>
                  </div>
                </div>

              </>
            )
          })}
        </div>
      </div>
      
    </>
  )
}

export default Fashion