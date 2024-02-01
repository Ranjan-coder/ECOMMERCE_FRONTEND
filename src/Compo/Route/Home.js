import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { NavLink } from 'react-router-dom'
import myGif from '../Imageh/homecontentvideo.gif'
import shiping from '../Imageh/shiping.gif'
import refund from '../Imageh/refund.jpg'
import service from '../Imageh/service.jpg'
import Appslider from './Imagesliderweb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDollarToSlot, faHeadset, faTruckFast } from '@fortawesome/free-solid-svg-icons'


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
      
      <div className='imagegif'>
      <img className='mygif' src={myGif} alt="my-gif" />
      </div>
      <div className='homeiconftr'>
        <div className='homeiconftr1'>
        <img className='shipinggif' src={shiping} alt="my-gif" />
          {/* <div><FontAwesomeIcon icon={faTruckFast} style={{color: "#3f81f3",height:"10vh"}} /></div> */}
          <p className='homeiconftr2'>FREE SHIPING</p>
          <p className='homeiconftr3'>🚚 Enjoy Free Shipping on All Orders! Shop Now and Get Your Favorites Delivered Straight to Your Doorstep, No Minimum Purchase Required!</p>
        </div>
        <div className='homeiconftr1'>
        <img className='refundjpg' src={refund} alt="my-gif" />
        {/* <div><FontAwesomeIcon icon={faCircleDollarToSlot} style={{color: "#3f81f3",height:"10vh"}} /></div> */}
        <p className='homeiconftr2'>100% REFUND</p>
        <p className='homeiconftr3'>Not satisfied with your purchase? No worries! We offer hassle-free refunds. Shop with confidence knowing your satisfaction is guaranteed!</p>
        </div>
        <div className='homeiconftr1'>
        <img className='refundjpg' src={service} alt="my-gif" />
        {/* <div><FontAwesomeIcon icon={faHeadset} style={{color: "#3f81f3",height:"10vh"}} /></div> */}
        <p className='homeiconftr2'>SUPPORT 24/7</p>
        <p className='homeiconftr3'>Need help? Our support team is here for you! Reach out 24/7 for assistance with any questions or concerns.</p>
        </div>
      </div>

    </>
  )
}

export default Home