import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const DynamicCompo = () => {

  const paremId = useParams().id;

  const [contextData] = useContext(Store)
  const Navi = useNavigate()

  return (
    <>
      <div id='dynmbgc'>
        {contextData.filter((data) => data.id === parseInt(paremId)).map((item, index) => {
          return (
            <>
            <div className='dynmparent' key={index}>
              <div id='dynmimgcenter'>
                <img id='dynmimg' src={item.image} alt='not found' />
              </div>
              <div>
              <div id='dynmheading'>{item.name}</div>
              <div id='dynmrating'>{item.rating}</div>
              <div id='dynmprice'>{item.price}</div>
              <p id='dynmdesc'>{item.description}</p>
              </div>
            </div>
            <div className='dynmparentcart'>
            <NavLink to={`/cart/${item.id}`}><div className='dynmaddcart' onClick={()=>Navi('/cart')}><FontAwesomeIcon className='icon3 cartsmall' icon={faCartShopping}/>ADD TO CART</div></NavLink>
            <NavLink to={`/cart/${item.id}`}>
            <div className='dynmbuynow' onClick={()=>Navi('/cart')}><FontAwesomeIcon icon={faBolt} />BUY NOW</div>
            </NavLink>
            </div>


            </>
          )
        })}
      </div>
      <div id='dynmbtm'>
        <button id='dynmrevbtm' onClick={() => Navi(-1)}>Go Back</button>
      </div>
    </>
  )
}

export default DynamicCompo