import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import myGif from '../Imageh/homecontentvideo.gif';
import shiping from '../Imageh/shiping.gif';
import refund from '../Imageh/refund.jpg';
import service from '../Imageh/service.jpg';
import Appslider from './Imagesliderweb';
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Home = ({ addToCart }) => {

//   const notify = () => {
//     // Calling toast method by passing string
//     toast("Item Added", {
//       // position: toast.POSITION.TOP_RIGHT,
//   });
// };
  // const notify = () => toast("Item added sucessfully");
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



  // const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  // const handleAddToCart = () => {
  //   const existingItemIndex = cartItems.findIndex((item) => item.id === products.id);
  //   if (existingItemIndex !== -1) {
  //     cartItems[existingItemIndex].quantity++;
  //   } else {
  //     cartItems.push({ id: products.id, quantity: 1 });
  //   }
  //   localStorage.setItem('cart', JSON.stringify(cartItems));
  //   // Update cart icon/count display here


  // }

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
            {/* <button onClick={notify}>Click Me!</button> */}
            {/* <ToastContainer /> */}
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
