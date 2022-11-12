import React from 'react'
import { useSelector } from 'react-redux'

export const Restaurant_cart = () => {
  const displaycart = useSelector(state =>state.Restaurant_cart.order_value);

  

  return (
    <div className='cart_order_container'>
      {displaycart.length > 0 ?
        <div>

          <div>
            <h1 style={{"color":"wheat", "textAlign":"center", "textTransform": "capitalize",  "padding":"10px 0px", "textShadow":"1px 1px 2px lime"}}>total price : <span style={{"color":"red"}}>{displaycart.map(cost=>cost.price).reduce((a,b)=>a+b)}</span>/-</h1>
          </div>

          <div className='reuse_products_box_container'>
            {displaycart.map(item =>( 
                <div className='reuse_products'>
                  <h2 style={{"textTransform":"capitalize", "marginBottom":"3px"}}>table number : <span style={{"color":"red"}}>{item.tableNumber}</span></h2>
                  <img className='reuse_products_img' src= {item.img} alt="not displayed"/>
                  <p className='reuse_products_p1'>{item.name}</p>
                  <p className='reuse_products_p1'>Rs <span className='reuse_products_span'>{item.price}</span>/-</p>
                  
                </div>
            ))}
          </div>

        </div>
      :
        <div className='no_order_cart_container'>
          <h1 className='no_order_cart'>no order placed yet...</h1>
        </div>
}
    </div>
  )
}
