import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export const Restaurant_signin = () => {

  const [data, setdata] = useState({
    name : "",
    password : ""
  })

  const change_handler = (e)=>{
    setdata({...data,[e.target.name]:e.target.value});
  }

  const sub_handler = (e)=> {
    e.preventDefault();
  }
  return (
    <div className='restaurant_signin_container'>
      <div className='restaurant_signin_container_box'>

        <div className='restaurant_signin_container_box_bottom'>
          <div className='box_bottom_text'>
            <h1>heed some pizza, yo?</h1>
            <p>c'mon and order now from the menu items...</p>
          </div>
          <div className='box_bottom_font'>
            <p>sign in with</p>
            <Link><i class="fa-brands fa-facebook-f"></i></Link>
            <Link><i class="fa-brands fa-twitter"></i></Link>
            <Link><i class="fa-brands fa-instagram"></i></Link>
          </div>
        </div>

        <div className='restaurant_signin_container_box_top'>
          <div className='top_text'>
            <h1>log in</h1>
            <form onSubmit={sub_handler}>
              <input className='top_inp' type= "text" name='name' placeholder='Name' value={data.name} onChange = {change_handler}/><br/>
             
              <input className='top_inp' type= "password" name='password' placeholder='Password' value={data.password} onChange = {change_handler}/><br/>
              <input className='top_but' type="submit" value="submit"/>
              <p className='top_para'>forgot password?</p>

              <Link to="/signup" style={{"textDecoration":"none", "color":"aqua"}}><p className='top_bot_para'>create your account<i class="fa-solid fa-arrow-right-long top_bot_font"></i></p></Link>
            </form>
          </div>
        </div>

      </div>

    </div>
  )
}
