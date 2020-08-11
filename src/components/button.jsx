import React from 'react';
import '../css/button.css'
import phone from '../img/phone.png'

export const Button = () => {

   return (
      <div className="main_button">
         <a className="button" href="tel:+3809779739545">Заказать <span><img className="phone" src={phone} alt="phone" /></span></a>
      </div>
   )
}