import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import {Restaurant_home} from "../components/restaurant_home"
import {Restaurant_menu} from "../components/restaurant_menu/restaurant_menu"
import {Restaurant_default} from "../components/restaurant_default"
import {Restaurant_galary} from "../components/restaurant_galary"
import {Restaurant_cart} from "../components/restaurant_cart"
import {Restaurant_signin} from "../components/restaurant_signin"
import {Restaurant_create_account} from "../components/restaurant_create_account"
import {Restaurant_reserve_table} from "../components/restaurant_reserve_table"
import {Restaurant_contact} from "../components/restaurant_contact"
import {Restaurant_whoWeAre} from "../components/restaurant_who-we-are"

//resturant_menu_items
import {Restaurant_menu_biryani} from "../components/restaurant_menu/restaurant_menu_biryani"
import {Restaurant_menu_rice} from "../components/restaurant_menu/restaurant_menu_rice"
import {Restaurant_menu_fastfood} from "../components/restaurant_menu/restaurant_menu_fastfood"
import {Restaurant_menu_pizza} from "../components/restaurant_menu/restaurant_menu_pizza"
import {Restaurant_menu_burger} from "../components/restaurant_menu/restaurant_menu_burger"
import {Restaurant_menu_soups} from "../components/restaurant_menu/restaurant_menu_soups"
import {Restaurant_menu_beverages} from "../components/restaurant_menu/restaurant_menu_beverages"
import {Restaurant_menu_icecream} from "../components/restaurant_menu/restaurant_menu_icecream"

export const Restaurant_routings = () => {
  return (
    <div>
       <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Restaurant_home />}/>
                <Route path='/menu' element = {<Restaurant_menu />}/>
                <Route path='/galary' element = {<Restaurant_galary />}/>
                <Route path='/cart' element = {<Restaurant_cart />}/>
                <Route path='/signin' element = {<Restaurant_signin />}/>
                <Route path='/signup' element = {<Restaurant_create_account />}/>
                <Route path='/reserve_table' element = {<Restaurant_reserve_table />}/>
                <Route path='/contact' element = {<Restaurant_contact />}/>
                <Route path='/who_we_are' element = {<Restaurant_whoWeAre />}/>

                {/* resturant_menu_items */}
                <Route path='/menu/biryani' element = {<Restaurant_menu_biryani />}/>
                <Route path='/menu/rice' element = {<Restaurant_menu_rice />}/>
                <Route path='/menu/fast_food' element = {<Restaurant_menu_fastfood />}/>
                <Route path='/menu/pizza' element = {<Restaurant_menu_pizza />}/>
                <Route path='/menu/burger' element = {<Restaurant_menu_burger />}/>
                <Route path='/menu/soups' element = {<Restaurant_menu_soups />}/>
                <Route path='/menu/beverages' element = {<Restaurant_menu_beverages />}/>
                <Route path='/menu/ice_creams' element = {<Restaurant_menu_icecream />}/>


                {/* resturant_default*/ }
                <Route path='*' element = {<Restaurant_default />}/>
            </Routes>
       </BrowserRouter>
    </div>
  )
}
