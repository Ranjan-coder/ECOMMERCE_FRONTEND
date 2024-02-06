import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios'

const Camera = ({ addToCart }) => {

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
      console.log(addToCart);
    };

  return (
    <>

<div className='parentside'>
        <div className='leftchild'>
           <div id='homedata'>
        {
          products.filter((e) => e.category === 'camera').map((item, index) => (
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
            )
          )
        }
      </div>
        
        </div>
        
      </div>
      
    </>
  )
}

export default Camera