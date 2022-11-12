import React from 'react'
import {Link} from "react-router-dom"


export const Restaurant_create_account = () => {

  const signup_handler = ()=> {

    alert("your account has been created... \n please sign in...")
  }
  
  return (
    <div className='restaurant_create_account_container'>
      <div className='restaurant_create_account_box'>

        <div className='restaurant_create_account_box_left'>
          <div className='restaurant_create_account_box_left_content'>
            <h1>welcome back!</h1>
            <p>to keep connected with us please login with your personal info</p>
            <Link className='restaurant_create_account_box_left_content_link' to="/signin">sign in</Link>
          </div>
        </div>

        <div className='restaurant_create_account_box_right'>
          <div className='restaurant_create_account_box_right_content'>
            <h1>create account</h1>
            <div className='font_container'>
              <div className='restaurant_create_account_box_right_content_links'><Link className='restaurant_create_account_box_right_content_link'><i class="fa-brands fa-facebook-f fonttt"></i></Link></div>
              <div className='restaurant_create_account_box_right_content_links'><Link className='restaurant_create_account_box_right_content_link'><i class="fa-brands fa-google-plus-g fonttt"></i></Link></div>
              <div className='restaurant_create_account_box_right_content_links'><Link className='restaurant_create_account_box_right_content_link'><i class="fa-brands fa-linkedin-in fonttt"></i></Link></div>
            </div>
            <p>or use your email for registration:</p>


            <form>
              <input className='nnn' type="text" name="text" placeholder="Name" /><br/>
              <input className='eee' type="email" name="email" placeholder='Email'/><br/>
              <input className='ppp' type="password" name="text" placeholder='Password'/><br/>
              <input  className='cch' type="checkbox"/>
              <label className='cch_lable'>i agree all statements in <Link>terms of service</Link></label><br/><br/>
              <button className='btb' type='button' onClick={signup_handler}> sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
