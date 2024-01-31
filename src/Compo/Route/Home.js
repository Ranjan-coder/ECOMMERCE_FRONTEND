import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { NavLink } from 'react-router-dom'
import video from '../Imageh/animatedvideo.mp4'
import Appslider from './Imagesliderweb'


const Home = () => {

  const [data] = useContext(Store)
  console.log(data);

  return (
    <>
    <Appslider/>

      <div className='homelatest'>
      <div className='toppost'>BEST SELLER</div>
      <div className='hrline'></div>
      </div>

      <div id='homedata'>
        {
          data.filter((data) => data.id % 5 === 0).map((item, index) => {
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
      
      <div className='videocontent'>
      <video width="1260vh" height="360" controls autoPlay loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>

    </>
  )
}

export default Home