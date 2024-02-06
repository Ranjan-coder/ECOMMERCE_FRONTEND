import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Cart = ({ cartItems, setCartItems  }) => {

  const navigate = useNavigate()
  const [message,setMessage] = useState('')
  console.log(message);

  useEffect(()=>{
      const jwtToken = localStorage.getItem('jwtToken')
      console.log('token : ',jwtToken);
      if(!jwtToken){
          navigate('/login')
      }
      else{
          axios.get('https://ecommercebackend-ptf5.onrender.com/pages/log/cart',
          // when we use jwt token we have to use these keyword 
          // header and authorization are predefined keyword 
          {headers:{
              authorization:`Bearer ${jwtToken}`,
          },

          })
          .then(res=>{
              const responseData = res.data
              alert(responseData.msg)
              setMessage(responseData.msg)
          })
      }
  },[navigate])



  // const [cartItems, setCartItems] = useState([]);
  // Function to calculate the total price of all items in the cart
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to handle increasing the quantity of an item
  const handleIncreaseQuantity = (item) => {
    // Create a new array with updated quantity for the target item
    const updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    // Update the cart items state
    setCartItems(updatedCartItems);
  };

  // Function to handle decreasing the quantity of an item
  const handleDecreaseQuantity = (item) => {
    // Create a new array with updated quantity for the target item
    const updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    // Update the cart items state
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <h2 className='cartheading'>CART</h2>
    <div className='cartparent'>
      <div className='cartleft'>
        {
          cartItems.map((item, index) => (
            <div key={index} className='cartcontent'>
              <div>
              <img className='cartimage' src={item.image} alt='not found' />
              </div>
              <div>
              <div>
              <div className='cartname'>{item.name.slice(0, 20)}...</div>
              <div className='cartrating'>Seller : ISHOP ( a rising brand )</div>
              <div className='cartprice'><span className='cartprice1'>{item.price - (item.price * 10 / 100)}</span> <span>{item.price}</span></div>
              </div>
              
              <div>Total: {item.price * item.quantity}</div>
              <div className='cartquantitybuttom'>
              <button className='quantitybuttom' onClick={() => handleIncreaseQuantity(item)}>+</button>
              <div className='quantitybuttom'>{item.quantity}</div>
              <button className='quantitybuttom' onClick={() => handleDecreaseQuantity(item)}>-</button>
              </div>
              </div>
            </div>
          ))
        }
        <div className='placeorder'><button className='placeorder1'>PLACE ORDERS</button></div>
      </div>
      <div className='cartright'>
      <div className='pricedetsils'>PRICE DETAILS</div>
      <div className='pricesummary'><span>Total Price : </span> <span>{getTotalPrice()}</span></div>
      <div className='pricesummary'><span>Discount :</span> <span>0%</span> </div>
      <div className='pricesummary'><span>Delivery Charges :</span> <span>0</span></div>
      <div className='pricetotal'><span >Total Amount :</span> <span>0</span></div>
      </div>
      
    </div>
    </>
  );
};

export default Cart;
