import React from 'react'
import {Restaurant_footer} from "../reusable-components/restaurant_footer"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {settable_val, resettable_val} from "../components/redux/restaurant_reducer"


export const Restaurant_reserve_table = () => {
  const dispatch = useDispatch();
  const table = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  const tableValue = useSelector(state => state.Restaurant_Reducer.table_number);
  const table_color = "restaurant_menu_container_tab_button";
  const active_table_color = "restaurant_menu_container_tab_active_button";

  const reserve_handler = (tab)=> {
    dispatch(settable_val(tab));
    alert("table will be reserved for you...")
  }

  return (
    <div>
      
      <div className='restaurant_menu_container_table'>

            <h2 className='restaurant_menu_container_table_h2'><span className='please'>please</span> select your table number :  </h2>

            {/* restaurant_menu_container */}
            <div className='restaurant_menu_container_tabb'>
              {table.map((tab, index) => 

                <div key={index} className='restaurant_menu_container_tab'>
                  <button className={tableValue === tab?active_table_color:table_color} type='button' onClick={()=>reserve_handler(tab)}>{tab}</button>
                </div>
              )}
            </div>
          </div>

      {/* Restaurant_footer */}
      <Restaurant_footer />
    </div>
  )
}
