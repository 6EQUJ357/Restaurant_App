import React from 'react'
import {biryani, rice, fast_food, pizza, burger, soups, beverages, icecreams} from "../../images/restaurant_all_images"
import { Link } from 'react-router-dom';
import {Restaurant_footer} from "../../reusable-components/restaurant_footer"




export const Restaurant_menu = () => {
 
  const data = [
    {name : "biryani", imgg : biryani, type: "/menu/biryani"},
    {name : "rice", imgg : rice, type: "/menu/rice"},
    {name : "fast food", imgg: fast_food, type: "/menu/fast_food"},
    {name : "pizza", imgg : pizza, type: "/menu/pizza"},
    {name : "burger", imgg : burger, type: "/menu/burger"},
    {name : "soups", imgg : soups, type: "/menu/soups"},
    {name : "beverages", imgg : beverages, type: "/menu/beverages"},
    {name : "ice creams", imgg : icecreams, type: "/menu/ice_creams"}
  ];

  
  
  return (
    <div className='restaurant_menu_container'>

      <div className='restaurant_menu_container_head'>
        <h1 className='restaurant_menu_container_head_h1'><span className='hi'>hi!</span> we have a wonderfull dishes for u <br/>enjoy you day...</h1>
      </div>

     

      <div className='restaurant_menu_show'>
        <fieldset className='fieldset'>
          <legend>items</legend>
          <div className='iteration'>
            {data.map((item,index) => 
            <div key={index} className='restaurant_menu_show_imgs'>
              
              <Link to={item.type} className = "restaurant_menu_show_link">
              <img className='restaurant_menu_show_imgss' src= {item.imgg} alt = "not displayed"/>
              <p className='restaurant_menu_show_p'>{item.name}</p>
              </Link>
             
            </div>)}
          </div>
          
        </fieldset>
      </div>
      <div className='restaurant_menu_homebutt'>
       <p className='Restaurant_default_p3'><Link to= "/" className='restaurant_default_butt'>go to HOMEPAGE</Link></p>
      </div>

        <Restaurant_footer />

    </div>
  )
}
