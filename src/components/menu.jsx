import React from 'react';
import '../css/menu.css'
import { MenuItem } from './menuitem';

export const Menu = ({toggle}) => {

   const menu = [
      {item: "home", link: "Главная"}, 
      {item: "service", link: "Сервис"}, 
      {item: "bouquets", link: "Букеты"}, 
      {item: "about", link: "О нас"}, 
      {item: "sale", link: "Акция"}, 
      {item: "advantages", link: "Преимущества"}, 
      {item: "testimonials", link: "Отзывы"}, 
      {item: "contacts", link: "Контакты"}
   ]
   
   const list = menu.map((elem, index) => 
      <MenuItem key={index} item={elem.item} link={elem.link} toggle={toggle} />
   )

   return (
      <div className="nav-menu">
         <div className="top-menu"  id="top-menu"> 
            <ul>
               {list}                    
            </ul>
         </div>
      </div>
   )
}