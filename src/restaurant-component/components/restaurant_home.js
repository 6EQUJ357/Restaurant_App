import React from 'react';
import { Link } from 'react-router-dom';
import {restaurant_img1, restaurant_img2} from "../images/restaurant_all_images";
import "../styling-component/restaurant_style.css";


export const Restaurant_home = () => {
  return (
    <div>

      <div className='parallex-box'>

        <div className='parallex-header'>

          <img className='parallex_img1' src= {restaurant_img1} alt='img not displayed'/>
          <img className='parallex_img2' src= {restaurant_img2} alt='img not displayed'/>
          

          <div className='parallex-heading'>

            <div className='parallex-heading-nav'>              
              <ul className='parallex-heading-nav-ul'>
                <li className='parallex-heading-nav-li1'><Link className='parallex-heading-nav-link alt'>wr<span className='atthe'>@</span>ng</Link></li>
                <li className='parallex-heading-nav-li2'><Link to="/" className='parallex-heading-nav-link'>home</Link></li>
                <li className='parallex-heading-nav-li2'><Link to="/menu" className='parallex-heading-nav-link'>menu</Link></li>
                <li className='parallex-heading-nav-li2'><Link to= "/galary" className='parallex-heading-nav-link'>galary</Link></li>
                <li className='parallex-heading-nav-li3'><Link to= "/cart" className='parallex-heading-nav-link'>cart <i class="fa-solid fa-cart-shopping"></i></Link></li>
                <li className='parallex-heading-nav-li4'><Link to= "/signin" className='parallex-heading-nav-link'>email signin</Link></li>
              </ul>
            </div>
            <div className='parallex-error-heading-text'>
              <h1 className='parallex-heading-h1'>have you tried something new <br/> yet ? visit us today !</h1>
              <br/>
              <button className='parallex-heading-butt'><Link className='parallex-heading-butt_link' to="/reserve_table">reserve table</Link></button>
              <button className='parallex-heading-butt'><Link className='parallex-heading-butt_link' to= "/menu">browse menu</Link></button>
            </div>      
          </div>
          

        </div>

        <div className='parallex-text'>
          <h1 style={{"textAlign":"center", "textTransform":"capitalize", "padding":"5px", "color":"red", "textShadow":"2px 3px 5px lime"}}>it's always good time for biryani ( or pizza or soups & ice-creams)</h1>
          <p>Contrary to popular belief, It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          <br/>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purposeinjected humour and the like.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
          <br/>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.lteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of modelContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the dgjgi iejerigjeijerkeof jg0irjefr0jrirjo jerijerjjrigjertoerkrjgoigjgisfiurh iuguuhgijfsdiherirugj oidjgirgoijsoifjffigngirgintiugn oergroigjrigjjer oijsgitjhi otgsdovmffoi jhigifjfijdiasairfsifhriugerifjj </p>
        </div>

        <footer className='restaurant_home_footer'>
         <i class="fa-brands fa-google"></i>
         <i class="fa-brands fa-twitter"></i>
         <i class="fa-brands fa-facebook"></i>
         <i class="fa-brands fa-instagram"></i>
         <i class="fa-brands fa-whatsapp"></i>
         <Link to= "/contact" className='restaurant_home_footer1'>contact</Link>
          <Link to= "/who_we_are" className='restaurant_home_footer2'>Who we are</Link>
        </footer>

      </div>

      
      
    </div>
  )
}
