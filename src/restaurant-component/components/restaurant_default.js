import React from 'react'
import { Link } from 'react-router-dom'


export const Restaurant_default = () => {
  return (
    <div className='default'>
      <div  className='restaurant_default'>

          <div className='restaurant_default_oops'>
            <h1 className='Restaurant_default_h1'>oops!</h1>
          </div>
          <p className='Restaurant_default_p'>404 - page not found</p>
          <p className='Restaurant_default_p2'>the page you are looking for might have been removed  had its name changed or is temporarily unavailable</p>

          <p className='Restaurant_default_p3'><Link to= "/" className='restaurant_default_butt'>go to HOMEPAGE</Link></p>
      </div>
    </div>
    
  )
}
