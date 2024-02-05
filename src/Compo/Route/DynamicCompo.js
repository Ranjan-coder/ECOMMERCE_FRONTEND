// import React, { useContext } from 'react'
// import { Store } from '../Store/Store'
// import { NavLink, useNavigate, useParams } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBolt, faCartShopping, faTag } from '@fortawesome/free-solid-svg-icons';

// const DynamicCompo = () => {

//   const paremId = useParams().id;

//   const [contextData] = useContext(Store)
//   const Navi = useNavigate()

//   return (
//     <>
//       <div id='dynmbgc'>
//         {contextData.filter((data) => data.id === parseInt(paremId)).map((item, index) => {
//           return (
//             <>
//             <div className='dynmparent' key={index}>
//               <div id='dynmimgcenter'>
//                 <img id='dynmimg' src={item.image} alt='not found' />
//               </div>
//               <div>
//               <div id='dynmheading'>{item.name}</div>
//               <div id='dynmrating'>{item.rating}</div>
//               <div id='dynmprice'>{item.price}</div>
//               <ul>
//                 <li><FontAwesomeIcon icon={faTag} style={{color:"#32cd32"}}/>Special PriceGet extra ₹9000 off (price inclusive of cashback/coupon) T&C</li>
//                 <li><FontAwesomeIcon icon={faTag} style={{color:"#32cd32"}}/>FreebieSpotify Premium - 12M at ₹699 T&C</li>
//                 <li><FontAwesomeIcon icon={faTag} style={{color:"#32cd32"}}/>Buy for 2000 get ₹500 off your Next Buy T&C</li>
//                 <li><FontAwesomeIcon icon={faTag} style={{color:"#32cd32"}}/>No cost EMI ₹5,000/month. Standard EMI also available View Plans</li>
//                 <li><FontAwesomeIcon icon={faTag} style={{color:"#32cd32"}}/>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</li>
//               </ul>
//               <div>Product Description : </div>
//               <p id='dynmdesc'>{item.description}</p>
//               </div>
//             </div>
//             <div className='dynmparentcart'>
//             <NavLink to={`/cart/${item.id}`}><div className='dynmaddcart' onClick={()=>Navi('/cart')}><FontAwesomeIcon className='icon3 cartsmall' icon={faCartShopping}/>ADD TO CART</div></NavLink>
//             <NavLink to={`/cart/${item.id}`}>
//             <div className='dynmbuynow' onClick={()=>Navi('/cart')}><FontAwesomeIcon icon={faBolt} />BUY NOW</div>
//             </NavLink>
//             </div>


//             </>
//           )
//         })}
//       </div>
//       <div id='dynmbtm'>
//         <button id='dynmrevbtm' onClick={() => Navi(-1)}>Go Back</button>
//       </div>
//     </>
//   )
// }

// export default DynamicCompo


import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../Store/Store';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCartShopping, faTag } from '@fortawesome/free-solid-svg-icons';

const DynamicCompo = ({ searchResults }) => {
  const { id } = useParams();
  const [contextData] = useContext(Store);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("contextData:", contextData);
  console.log("searchResults:", searchResults);
    if (searchResults && searchResults.length > 0) {
      const foundProduct = searchResults.find(item => item.id === parseInt(id));
      setProduct(foundProduct);
    } else {
      const foundProduct = contextData.find(item => item.id === parseInt(id));
      setProduct(foundProduct);
    }
  }, [id, searchResults, contextData]);

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <>
      <div id='dynmbgc'>
        <div className='dynmparent'>
          <div id='dynmimgcenter'>
            <img id='dynmimg' src={product.image} alt='not found' />
          </div>
          <div>
            <div id='dynmheading'>{product.name}</div>
            <div id='dynmrating'>{product.rating}</div>
            <div id='dynmprice'>{product.price}</div>
            <ul>
              <li><FontAwesomeIcon icon={faTag} style={{color:"#32cd32"}}/>Special PriceGet extra ₹9000 off (price inclusive of cashback/coupon) T&C</li>
              <li><FontAwesomeIcon icon={faTag} style={{color:"#32cd32"}}/>FreebieSpotify Premium - 12M at ₹699 T&C</li>
              <li><FontAwesomeIcon icon={faTag} style={{color:"#32cd32"}}/>Buy for 2000 get ₹500 off your Next Buy T&C</li>
              <li><FontAwesomeIcon icon={faTag} style={{color:"#32cd32"}}/>No cost EMI ₹5,000/month. Standard EMI also available View Plans</li>
              <li><FontAwesomeIcon icon={faTag} style={{color:"#32cd32"}}/>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</li>
            </ul>
            <div>Product Description : </div>
            <p id='dynmdesc'>{product.description}</p>
          </div>
        </div>
        <div className='dynmparentcart'>
          <NavLink to={`/cart/${product.id}`}><div className='dynmaddcart' onClick={() => navigate('/cart')}><FontAwesomeIcon className='icon3 cartsmall' icon={faCartShopping}/>ADD TO CART</div></NavLink>
          <NavLink to={`/cart/${product.id}`}>
            <div className='dynmbuynow' onClick={() => navigate('/cart')}><FontAwesomeIcon icon={faBolt} />BUY NOW</div>
          </NavLink>
        </div>
      </div>
      <div id='dynmbtm'>
        <button id='dynmrevbtm' onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </>
  );
};

export default DynamicCompo;

