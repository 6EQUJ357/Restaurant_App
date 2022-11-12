import React from 'react'
import { useDispatch } from 'react-redux'
import {placeorder, removeorder} from "../components/redux/cart_reducer"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {settable_val, resettable_val} from "../components/redux/restaurant_reducer"

export const Restaurant_menu_items = ({name, items}) => {
  const cartValue = useSelector(state=> state.Restaurant_cart.order_value.length);
  const dispatch = useDispatch();

  const table = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  const tableValue = useSelector(state => state.Restaurant_Reducer.table_number);
  const table_color = "restaurant_menu_container_tab_button";
  const active_table_color = "restaurant_menu_container_tab_active_button";

  const order_button_handle = async (id, name, price, category, img, tableNumber)=> {
    if(tableValue != null) {
      await dispatch(placeorder(id, name, price, category, img, tableNumber));
      await dispatch(resettable_val())
      alert("place order successfully...")
    }
    else {
      alert("please select table number...")
    }
  }

  const remove_button_handle =  async (id, name, price, category, img, tableValue)=> {
      await dispatch(removeorder(id, name, price, category, img,tableValue));
      alert("remove order successfully...")
    
    }
  
  return (
    <div className='reuse_products_box'>
      <div>
          <h1 className='reuse_products_box_h1'>{name} <Link to="/cart"><i class="fa-solid fa-cart-shopping"><span className='fa-cart'>{cartValue}</span></i></Link></h1>

          <div className='restaurant_menu_container_table'>

            <h2 className='restaurant_menu_container_table_h2'><span className='please'>please</span> select your table number :  </h2>

            {/* restaurant_menu_container */}
            <div className='restaurant_menu_container_tabb'>
              {table.map((tab, index) => 

                <div key={index} className='restaurant_menu_container_tab'>
                  <button className={tableValue === tab?active_table_color:table_color} type='button' onClick={()=>dispatch(settable_val(tab))}>{tab}</button>
                </div>
              )}
            </div>
          </div>
        </div>


        <div className='reuse_products_box_container'>
            {items.map(item =>( 
                <div key={item.product_id} className='reuse_products'>
                    <img className='reuse_products_img' src= {item.product_img} alt="not displayed"/>
                    <p className='reuse_products_p1'>{item.product_name}</p>
                    <p className='reuse_products_p1'>Rs <span className='reuse_products_span'>{item.product_price}</span>/-</p>

                    <div className='reuse_products_butt_box'>
                        <button className='reuse_products_butt' type='button' onClick={()=>order_button_handle({id : item.product_id, name:item.product_name, price : item.product_price, category:item.product_category, img : item.product_img, tableNumber :tableValue})}> order</button>

                        <button className='reuse_products_butt but2' type='button' onClick={()=>remove_button_handle({id : item.product_id, name:item.product_name, price : item.product_price, category:item.product_category, img : item.product_img,  tableNumber :tableValue})}> remove</button>
                    </div>
                </div>
                ))}
        </div>
    </div>
  )
}
