import React from 'react'
import {Restaurant_footer} from "../reusable-components/restaurant_footer"


export const Restaurant_contact = () => {

  const submit_handler =()=> {
    alert("your message was received...\n thank you for supporting us...");
    
  }
  return (
    <div className='restaurant_contact_box'>

      <h1 style={{"textTransform":"capitalize", "textAlign":"center", "fontFamily":"sans-serif"}}>contact us</h1>
      <div style={{"height":"400px", "padding":"30px", "margin":"30px", "marginLeft":"130px"}}>
        <div className='restaurant_contact_orange'>
          
          <div className='restaurant_contact_address'>
            <i class="fa-solid fa-location-dot fontawesome symbol"></i>
            <span className='qw'>address</span><br/><span className='qw2'>12345 galaxy #1729</span><br/><span className='qw3'>universe, 6equj5...</span>
          </div>
          <br/>
          <div className='restaurant_contact_call'>
            <i class="fa-solid fa-phone fontawesome symbol"></i>
            <span className='cal'>call us</span><br/><span className='cal2'>(012) 357 36963</span>
          </div>
          <br/>
          <div className='restaurant_contact_email'>
            <i class="fa-solid fa-envelope fontawesome symbol"></i>
            <span className='em'>email</span><br/><span className='em2'>hello@wrang.com</span>
          </div>

        </div>

        <div className='restaurant_contact_orange black'>
            <p className='timing'>store hours</p>
            <p className='timings'>monday: 11am-9pm</p>
            <p className='timings'>tuesday: 11am-9pm</p>
            <p className='timings'>wednesday: 11am-9pm</p>
            <p className='timings'>thursday: 11am-9pm</p>
            <p className='timings'>saturday: 11am-9pm</p>
            <p className='timings'>sunday: closed</p>
        </div>
      </div>

      <div className='touch'>
        <h1>get in touch</h1>
        <div className='touch_pa'><p>nulla accumsan quam a metus commodo volutpat. vivamus non urna sit amet metus placerat luctus. nulla eu tincidunt lectus.</p></div>

        <form className='forms' onSubmit={submit_handler}>
          <input className='input_name' type="text" name='name' placeholder='name'/><br/>
          <input className='input_email' type="email" name='email' placeholder='email address'/><br/>
          <textarea placeholder='message' className='input_messaga'></textarea>
          <br />
          <input className='input_submit' type = "submit" value = "submit"/>
        </form>
        
      </div>

    </div>
    
  )
}
