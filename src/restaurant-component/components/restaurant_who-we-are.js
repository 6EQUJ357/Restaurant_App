import React from 'react'
import {Link} from "react-router-dom"


export const Restaurant_whoWeAre = () => {
  return (
    <div className='restaurant_whoWeAre_container'>

      <div className='bad'>
        <h1 className='badge'>ranga rockzzz...</h1>
      </div>
      

      <div className='restaurant_whoWeAre_container_box'>
        <h1 className='restaurant_whoWeAre_container_box1'>our story</h1>
        <p>everything we do is a celebration of food - from how we source our dishes and shellfish to serving up new ways for you to enjoy it. since 1976, we've heen committed to bringing you different dishes experience you won't find anywhere else. that's how our dishes differently.</p>
      </div>

      <div style={{"marginBottom":"100px"}}>
        <h1 className='restaurant_whoWeAre_container_box2'>from the kitchen</h1>
        <p className='margin_bottom'>crispy... spicy... softy... if there's a particular kind of dishes you crave, find the perfect time to come in and discover new way to love it.</p>
        <Link className='restaurant_whoWeAre_container_link' to="/menu">what's cooking?</Link><br/><br/><br/>
        <Link className='restaurant_whoWeAre_container_link' to="/">home</Link>

      </div>

        
    </div>
  )
}
