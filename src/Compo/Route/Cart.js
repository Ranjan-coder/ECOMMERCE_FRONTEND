// Cart.js
import React, { useState } from 'react';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   return (
//     <div>
//       <h2>Cart</h2>
//       <div id='homedata'>
//         {
//           cartItems.map((item, index) => {
//             return (
//               <>
//                 <div id='homedatacontent'>
//                     <img className='imageheighthome' src={item.image} alt='not found' />
//                     <div className='itemname'>{item.name.slice(0, 20)}...</div>
//                     <div className='itemrating'>{item.rating}</div>
//                     <div className='itemprice'>{item.price}</div>
                 
//                 </div>
//               </>
//             )
//           })
//         }
//       </div>
//     </div>
//   );
// };

// const Cart = ({ cartItems }) => {
//   return (
//     <div>
//       <h2>Cart</h2>
//       <div id='homedata'>
//         {
//           cartItems.map((item, index) => {
//             return (
//               <div key={index} id='homedatacontent'>
//                 <img className='imageheighthome' src={item.image} alt='not found' />
//                 <div className='itemname'>{item.name.slice(0, 20)}...</div>
//                 <div className='itemrating'>{item.rating}</div>
//                 <div className='itemprice'>{item.price}</div>
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//   );
// };


// export default Cart;




// import React from 'react';

const Cart = ({ cartItems, setCartItems  }) => {
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
