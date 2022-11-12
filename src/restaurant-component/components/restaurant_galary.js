import React from 'react'
import restaurant_items from "../json/restaurant_items.json"
import {Restaurant_footer} from "../reusable-components/restaurant_footer"

export const Restaurant_galary = () => {

  return (
    <div>
      <div>
        {restaurant_items.Biryani.map(item =>( 
          <div key={item.id} style={{"display":"inline-block", "margin": "5px"}}>
            <img src= {item.product_img} alt = "not" width="200px" height= "200px" />
          </div>
        ))}
      </div>
      <div>
        {restaurant_items.Rice.map(item =>( 
          <div key={item.id} width = "30%" style={{"display":"inline-block"}}>
            <img src= {item.product_img} alt = "not" width="200px" height= "200px" />
          </div>
        ))}
      </div>
      <div>
        {restaurant_items.Fast_food.map(item =>( 
          <div key={item.id} width = "30%" style={{"display":"inline-block"}}>
            <img src= {item.product_img} alt = "not" width="200px" height= "200px" />
          </div>
        ))}
      </div>
      <div>
        {restaurant_items.Pizza.map(item =>( 
          <div key={item.id} width = "30%" style={{"display":"inline-block"}}>
            <img src= {item.product_img} alt = "not" width="200px" height= "200px" />
          </div>
        ))}
      </div>
      <div>
        {restaurant_items.Burger.map(item =>( 
          <div key={item.id} width = "30%" style={{"display":"inline-block"}}>
            <img src= {item.product_img} alt = "not" width="200px" height= "200px" />
          </div>
        ))}
      </div>
      <div>
        {restaurant_items.soups.map(item =>( 
          <div key={item.id} width = "30%" style={{"display":"inline-block"}}>
            <img src= {item.product_img} alt = "not" width="200px" height= "200px" />
          </div>
        ))}
      </div>
      <div>
        {restaurant_items.Beverages.map(item =>( 
          <div key={item.id} width = "30%" style={{"display":"inline-block"}}>
            <img src= {item.product_img} alt = "not" width="200px" height= "200px" />
          </div>
        ))}
      </div>
      <div>
        {restaurant_items.Ice_cream.map(item =>( 
          <div key={item.id} width = "30%" style={{"display":"inline-block"}}>
            <img src= {item.product_img} alt = "not" width="200px" height= "200px" />
          </div>
        ))}
      </div>

      {/* Restaurant_footer */}
      <Restaurant_footer />
    </div>
  )
}
