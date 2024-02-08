// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Cart = ({ cartItems, setCartItems }) => {
//   const navigate = useNavigate();
//   const [message, setMessage] = useState('');
//   const [quantities, setQuantities] = useState({});
//   console.log(setCartItems)

//   useEffect(() => {
//     const jwtToken = localStorage.getItem('jwtToken :');
//     if (!jwtToken) {
//       navigate('/login');
//     } else {
//       axios
//         .get('https://ecommercebackend-ptf5.onrender.com/pages/log/cart', {
//           headers: {
//             authorization: `Bearer ${jwtToken}`,
//           },
//         })
//         .then((res) => {
//           const responseData = res.data;
//           alert(responseData.msg);
//           setMessage(responseData.msg);
//         });
//     }
//   }, [navigate]);

//   // Function to calculate the total price of all items in the cart
//   const getTotalPrice = () => {
//     let totalPrice = 0;
//     cartItems.forEach(item => {
//       totalPrice += item.price * (quantities[item.id] || 1);
//     });
//     return totalPrice;
//   };

//   // Function to handle increasing the quantity of an item
//   const handleIncreaseQuantity = (itemId) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [itemId]: (prevQuantities[itemId] || 1) + 1,
//     }));
//   };

//   // Function to handle decreasing the quantity of an item
//   const handleDecreaseQuantity = (itemId) => {
//     if (quantities[itemId] > 1) {
//       setQuantities((prevQuantities) => ({
//         ...prevQuantities,
//         [itemId]: prevQuantities[itemId] - 1,
//       }));
//     } else {
//       // Remove the item from the cart if quantity becomes less than 1
//       const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
//       setCartItems(updatedCartItems);
//       // Also update the quantities state to remove the quantity of the removed item
//       setQuantities((prevQuantities) => {
//         const updatedQuantities = { ...prevQuantities };
//         delete updatedQuantities[itemId];
//         return updatedQuantities;
//       });
//     }
//   };

//   const handleOrderPlaced = () => {
//     if (cartItems.length === 0) {
//       // If cart is empty, show alert
//       alert("Please add items to the cart before placing an order");
//     } else {
//       // Clear the cart by setting it to an empty array
//       setCartItems([]);
//       navigate('/orderplaced')

//     }
//   };
  

//   return (
//     <>
//       <h2 className="cartheading">CART</h2>
//       <div className="cartparent">
//         <div className="cartleft">
//           {cartItems.map((item, index) => (
//             <div key={index} className="cartcontent">
//               <div>
//                 <img className="cartimage" src={item.image} alt="not found" />
//               </div>
//               <div>
//                 <div>
//                   <div className="cartname">{item.name.slice(0, 20)}...</div>
//                   <div className="cartrating">Seller : ISHOP ( a rising brand )</div>
//                   <div className="cartprice">
//                     <span className="cartprice1">{item.price}</span> <span>{item.price}</span>
//                   </div>
//                 </div>

//                 <div>Total: {item.price * (quantities[item.id] || 1)}</div>
//                 <div className="cartquantitybuttom">
//                   <button className="quantitybuttom" onClick={() => handleIncreaseQuantity(item.id)}>
//                     +
//                   </button>
//                   <div className="quantitybuttom">{quantities[item.id] || 1}</div>
//                   <button className="quantitybuttom" onClick={() => handleDecreaseQuantity(item.id)}>
//                     -
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div className="placeorder">
//           <button className="placeorder1" onClick={handleOrderPlaced}>PLACE ORDER</button>
//           </div>
//         </div>
//         <div className="cartright">
//           <div className="pricedetsils">PRICE DETAILS</div>
//           <div className="pricesummary">
//             <span>Total Price : </span> <span>{getTotalPrice()}</span>
//           </div>
//           <div className="pricesummary">
//             <span>Discount :</span> <span>0%</span>{' '}
//           </div>
//           <div className="pricesummary">
//             <span>Delivery Charges :</span> <span>0</span>
//           </div>
//           <div className="pricetotal">
//             <span>Total Amount :</span> <span>{getTotalPrice()}</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;








import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cart = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState({});

  // Initialize quantities state from localStorage when component mounts
  useEffect(() => {
    const storedQuantities = JSON.parse(localStorage.getItem('quantities'));
    if (storedQuantities) {
      setQuantities(storedQuantities);
    }
  }, []);

  // Update quantities state whenever cartItems change
  useEffect(() => {
    const newQuantities = {};
    cartItems.forEach(item => {
      newQuantities[item.id] = item.quantity;
    });
    setQuantities(newQuantities);
    // Update localStorage with the new quantities
    localStorage.setItem('quantities', JSON.stringify(newQuantities));
  }, [cartItems]);

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken : ');
    if (!jwtToken) {
      navigate('/login');
    } else {
      axios
        .get('https://ecommercebackend-ptf5.onrender.com/pages/log/cart', {
          headers: {
            authorization: `Bearer ${jwtToken}`,
          },
        })
        .then((res) => {
          console.log(res.data); 
          // alert(responseData.msg);
        });
    }
  }, [navigate]);


  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.price * (quantities[item.id] || 1);
    });
    return totalPrice;
  };

  const handleIncreaseQuantity = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 1) + 1,
    }));
  };

  const handleDecreaseQuantity = (itemId) => {
    if (quantities[itemId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    } else {
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCartItems);
      setQuantities((prevQuantities) => {
        const updatedQuantities = { ...prevQuantities };
        delete updatedQuantities[itemId];
        return updatedQuantities;
      });
    }
  };

  const handleOrderPlaced = () => {
    if (cartItems.length === 0) {
      alert("Please add items to the cart before placing an order");
    } else {
      setCartItems([]);
      localStorage.removeItem('quantities');
      navigate('/orderplaced');
    }
  };

  return (
    <>
      <h2 className="cartheading">CART</h2>
      <div className="cartparent">
        <div className="cartleft">
          {cartItems.map((item, index) => (
            <div key={index} className="cartcontent">
              <div>
                <img className="cartimage" src={item.image} alt="not found" />
              </div>
              <div>
                <div>
                  <div className="cartname">{item.name.slice(0, 20)}...</div>
                  <div className="cartrating">Seller : ISHOP ( a rising brand )</div>
                  <div className="cartprice">
                    <span className="cartprice1">{item.price}</span> <span>{item.price}</span>
                  </div>
                </div>

                <div>Total: {item.price * (quantities[item.id] || 1)}</div>
                <div className="cartquantitybuttom">
                  <button className="quantitybuttom" onClick={() => handleIncreaseQuantity(item.id)}>
                    +
                  </button>
                  <div className="quantitybuttom">{quantities[item.id] || 1}</div>
                  <button className="quantitybuttom" onClick={() => handleDecreaseQuantity(item.id)}>
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="placeorder">
            <button className="placeorder1" onClick={handleOrderPlaced}>PLACE ORDER</button>
          </div>
        </div>
        <div className="cartright">
          <div className="pricedetsils">PRICE DETAILS</div>
          <div className="pricesummary">
            <span>Total Price : </span> <span>{getTotalPrice()}</span>
          </div>
          <div className="pricesummary">
            <span>Discount :</span> <span>0%</span>{' '}
          </div>
          <div className="pricesummary">
            <span>Delivery Charges :</span> <span>0</span>
          </div>
          <div className="pricetotal">
            <span>Total Amount :</span> <span>{getTotalPrice()}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

