import React from 'react';
import {Nav} from './nav';
import {Button} from './button';
import '../css/header.css'


export const Header = ({footer}) => {

   return (
      <div className="header" id="home">
         <Nav />
         <div className="header-content">
            <div className="title">
               <h1 className="maintitle">Хочешь красивую свадьбу?</h1>
               <div className="maintitle"> Мы знаем что тебе предложить</div>
            </div>
            <Button />
         </div>
      </div>
   )
}