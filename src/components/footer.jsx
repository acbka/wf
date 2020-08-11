import React from 'react';
import '../css/footer.css';
import facebook from '../img/facebook.ico';
import instagram from '../img/instagram.png';
import pinterest from '../img/pinterest.ico';
import instagram1 from '../img/instagram1.png';
import pinterest1 from '../img/pinterest1.png';
import facebook1 from '../img/facebook1.png';
import { Social } from './social';

export const Footer =() => {

let social = [
   {img1: instagram1, img2: instagram, name: instagram, link: "https://www.instagram.com/"}, 
   {img1: facebook1, img2: facebook, name: facebook, link: "https://www.facebook.com/"}, 
   {img1: pinterest1, img2: pinterest, name: pinterest, link: "https://www.pinterest.ru/"},
   ]

   const list = social.map((item, index) => 
      <Social key={index} link={item.link} img1={item.img1} img2={item.img2} name={item.name} /> 
   )

   return (
      <footer id="contacts">
       <div className="container">
         <div className="flex">
            <div className="footer-left">
               <p className="footer-text"><b>Wedding Flowers</b></p>
               <a className="phone" href="tel:+3809779739545">+380630576665</a>    
            </div>
            <div className="social">  
               {list}
            </div>
         </div>
      </div>
      </footer>  
   )
}