// import React, { useContext, useEffect, useState } from 'react'
// // import { Store } from '../Store/Store'
// import { NavLink } from 'react-router-dom'
// import myGif from '../Imageh/homecontentvideo.gif'
// import shiping from '../Imageh/shiping.gif'
// import refund from '../Imageh/refund.jpg'
// import service from '../Imageh/service.jpg'
// import Appslider from './Imagesliderweb'
// import axios from 'axios'


// const Home = async({ addToCart }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Make an HTTP GET request to your backend server
//     axios.get('https://ecommercebackend-ptf5.onrender.com/pages/log/data')
//       .then(response => {
//         // Handle successful response
//         setProducts(response.data);
//       })
//       .catch(error => {
//         // Handle error
//         console.error('Error fetching products:', error);
//       });
//   }, []); // Empty dependency array ensures this effect runs only once


//   // const [data] = useContext(Store)
//   // console.log(data);

//   const handleAddToCart = (item) => {
//     addToCart(item);
//     console.log(addToCart);


//   };

//   return (
//     <>
//     <Appslider/>

//       <div className='homelatest'>
//       <div className='toppost'>BEST SELLER</div>
//       <div className='hrline'></div>
//       </div>

//       <div id='homedata'>
//         {
//           products.filter((data) => data.id % 5 === 0).map((item, index) => (
//             // return (
//               // <>
//                 <div id='homedatacontent'>
//                   <NavLink to={`/dynamic/${item.id}`}>
//                     <img className='imageheighthome' src={item.image} alt='not found' />
//                     <div className='itemname'>{item.name.slice(0, 15)}...</div>
//                     <div className='itemrating'>{item.rating}</div>
//                     <div className='itemprice'>{item.price}</div>
//                   </NavLink>
//                     <button className='homecartbtm' onClick={() => handleAddToCart(item)}>Add To Cart</button>
//                   {/* <p className='itemdesc descriptionwidth'>{item.description.slice(0, 150)}...</p> */}

//                 </div>
//               // </>
//             // )
//           ))
//         }
//       </div>
      
//       <div className='imagegif'>
//       <img className='mygif' src={myGif} alt="my-gif" />
//       </div>
//       <div className='homeiconftr'>
//         <div className='homeiconftr1'>
//         <img className='shipinggif' src={shiping} alt="my-gif" />
//           {/* <div><FontAwesomeIcon icon={faTruckFast} style={{color: "#3f81f3",height:"10vh"}} /></div> */}
//           <p className='homeiconftr2'>FREE SHIPING</p>
//           <p className='homeiconftr3'>🚚 Enjoy Free Shipping on All Orders! Shop Now and Get Your Favorites Delivered Straight to Your Doorstep, No Minimum Purchase Required!</p>
//         </div>
//         <div className='homeiconftr1'>
//         <img className='refundjpg' src={refund} alt="my-gif" />
//         {/* <div><FontAwesomeIcon icon={faCircleDollarToSlot} style={{color: "#3f81f3",height:"10vh"}} /></div> */}
//         <p className='homeiconftr2'>100% REFUND</p>
//         <p className='homeiconftr3'>Not satisfied with your purchase? No worries! We offer hassle-free refunds. Shop with confidence knowing your satisfaction is guaranteed!</p>
//         </div>
//         <div className='homeiconftr1'>
//         <img className='refundjpg' src={service} alt="my-gif" />
//         {/* <div><FontAwesomeIcon icon={faHeadset} style={{color: "#3f81f3",height:"10vh"}} /></div> */}
//         <p className='homeiconftr2'>SUPPORT 24/7</p>
//         <p className='homeiconftr3'>Need help? Our support team is here for you! Reach out 24/7 for assistance with any questions or concerns.</p>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Home



import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import myGif from '../Imageh/homecontentvideo.gif';
import shiping from '../Imageh/shiping.gif';
import refund from '../Imageh/refund.jpg';
import service from '../Imageh/service.jpg';
import Appslider from './Imagesliderweb';
import axios from 'axios';

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ecommercebackend-ptf5.onrender.com/pages/log/data');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <>
      <Appslider />

      <div className='homelatest'>
        <div className='toppost'>BEST SELLER</div>
        <div className='hrline'></div>
      </div>

      <div id='homedata'>
        {products.filter((data) => data.id % 5 === 0).map((item, index) => (
          <div id='homedatacontent' key={item.id}>
            <NavLink to={`/dynamic/${item.id}`}>
              <img className='imageheighthome' src={item.image} alt='not found' />
              <div className='itemname'>{item.name.slice(0, 15)}...</div>
              <div className='itemrating'>{item.rating}</div>
              <div className='itemprice'>{item.price}</div>
            </NavLink>
            <button className='homecartbtm' onClick={() => handleAddToCart(item)}>Add To Cart</button>
          </div>
        ))}
      </div>

      <div className='imagegif'>
        <img className='mygif' src={myGif} alt="my-gif" />
      </div>
      <div className='homeiconftr'>
        <div className='homeiconftr1'>
          <img className='shipinggif' src={shiping} alt="my-gif" />
          <p className='homeiconftr2'>FREE SHIPPING</p>
          <p className='homeiconftr3'>🚚 Enjoy Free Shipping on All Orders! Shop Now and Get Your Favorites Delivered Straight to Your Doorstep, No Minimum Purchase Required!</p>
        </div>
        <div className='homeiconftr1'>
          <img className='refundjpg' src={refund} alt="my-gif" />
          <p className='homeiconftr2'>100% REFUND</p>
          <p className='homeiconftr3'>Not satisfied with your purchase? No worries! We offer hassle-free refunds. Shop with confidence knowing your satisfaction is guaranteed!</p>
        </div>
        <div className='homeiconftr1'>
          <img className='refundjpg' src={service} alt="my-gif" />
          <p className='homeiconftr2'>SUPPORT 24/7</p>
          <p className='homeiconftr3'>Need help? Our support team is here for you! Reach out 24/7 for assistance with any questions or concerns.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
