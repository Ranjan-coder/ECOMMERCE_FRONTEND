import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { NavLink } from 'react-router-dom'
import ImageSlider from './ImageSlider'
import video from '../Imageh/animatedvideo.mp4'


const Home = () => {

  const [data] = useContext(Store)
  console.log(data);

  return (
    <>
    <ImageSlider/>



      <div className='homelatest'>
      <div className='toppost'>BEST SELLER</div>
      <div className='hrline'></div>
      </div>

      <div id='homedata'>
        {
          data.filter((data) => data.id % 10 === 0).map((item, index) => {
            return (
              <>
                <div id='homedatacontent'>
                  <NavLink to={`/dynamic/${item.id}`}>
                    <h2 className='itemheading'>{item.name}</h2>
                    <img className='imageheight' src={item.image} alt='not found' />
                  </NavLink>
                  <p className='itemdesc descriptionwidth'>{item.description.slice(0, 150)}...</p>

                </div>
              </>
            )
          })
        }
      </div>
      
      <div>
      <video width="1260vh" height="360" controls autoPlay loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>

    </>
  )
}

export default Home