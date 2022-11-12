import React from 'react'
import {Restaurant_menu_items} from "./../../reusable-components/restaurant_items"
import restaurant_items from "./../../json/restaurant_items.json"
import {Restaurant_footer} from "./../../reusable-components/restaurant_footer"


export const Restaurant_menu_rice = () => {
    const data = restaurant_items.Rice
  return (
    <div>
        {/* Restaurant_menu_items */}
        <Restaurant_menu_items name = "rice items" items = {data}/>

        {/* Restaurant_footer */}
        <Restaurant_footer />

    </div>
  )
}
