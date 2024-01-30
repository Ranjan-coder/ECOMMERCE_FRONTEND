import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { NavLink } from 'react-router-dom'

const Technology = () => {

  const [data] = useContext(Store)
  console.log(data)

  return (
    <>
      <div className='parentside'>
        <div className='leftchild'>
          <div className='toppost'>Technology</div>
          <div className='hrline'></div>
          {data.filter((e) => e.catagory === 'technology').map((item, index) => {
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
                      <h2 className='itemheading'>{item.heading}</h2>
                    </NavLink>
                    <p className='itemdesc'>{item.description.slice(0, 120)}...</p>
                  </div>
                </div>

              </>
            )
          })}
        </div>
        <div className='righttchild'>
          <div className='toppost'>Top Posts</div>
          <div className='hrline'></div>
          <div>



            {data.filter((e) => e.catagory === 'technologyt' && e.topost === 'firsttop').map((item, index) => {
              return (
                <>
                  <div>
                    <NavLink to={`/dynamic/${item.id}`}>
                      <img className='imageheight tphw' src={item.image} alt='not found' />
                      <h2 className='itemheading'>{item.heading}</h2>
                    </NavLink>
                  </div>
                  <hr />
                </>
              )
            })}
          </div>

          <div>
            {data.filter((e) => e.catagory === 'technologyt' && ((e.id >= 102) && (e.id <= 104))).map((item, index) => {
              return (
                <>
                  <div className='smalltopost'>
                    <NavLink to={`/dynamic/${item.id}`}>
                      <img className='imageheight tphwsmall' src={item.image} alt='not found' />
                    </NavLink>
                    <NavLink to={`/dynamic/${item.id}`}>
                      <h2 className='itemheading'>{item.heading}</h2>
                    </NavLink>
                  </div>
                  <hr />
                </>
              )
            })}
          </div>
          <div className='advertisement'>
            <img className='advertimg' src='https://i.pinimg.com/736x/12/ff/fd/12fffdd0d71dd1151eec5751177ff662.jpg' alt='ad' />
          <img className='advertimg2' src='https://dr-vfx.com/wp-content/uploads/2022/09/How-to-make-a-product-video-like-apple.jpg' alt='not found'/>
          </div>
          {/* <div>

          </div> */}
        </div>
      </div>

    </>
  )
}

export default Technology