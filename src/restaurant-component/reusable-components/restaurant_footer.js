import React from 'react'
import { Link } from 'react-router-dom'
export const Restaurant_footer = () => {
  return (
    <div className='restaurant_footer_box'>
        
      <div >
        <ul className='restaurant_footer'>
          <li><Link to="/" className='footer_link'>home</Link></li>
          <li><Link to="/menu" className='footer_link'>menu</Link></li>
          <li><Link to="/galary" className='footer_link'>galary</Link></li>
          <li><Link to="/cart" className='footer_link'>cart</Link></li>
          <li><Link to="/signup" className='footer_link'>email signup</Link></li>
          <li><Link  to="/contact" className='footer_link'>contact</Link></li>
          <li><Link to="/who_we_are" className='footer_link'>how we are</Link></li>
          <li><Link to="/menu/biryani" className='footer_link'>biryani</Link></li>
          <li><Link to="/menu/rice" className='footer_link'>rice</Link></li>

          <li><Link to="/menu/fast_food" className='footer_link'>fast food</Link></li>
          <li><Link to="/menu/pizza" className='footer_link'>pizza</Link></li>
          <li><Link  to="/menu/burger" className='footer_link'>burger</Link></li>

          <li><Link to="/menu/soups" className='footer_link'>soups</Link></li>
          <li><Link to="/menu/beverages" className='footer_link'>beverages</Link></li>
          <li><Link  to="/menu/ice_creams" className='footer_link'>ice ceram</Link></li>
          </ul>
      </div>

    </div>
  )
}
