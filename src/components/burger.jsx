import React from 'react';
import '../css/burger.css'

export const Burger = ({clickButton}) => {

   const handleClick = (e) => {
      e.preventDefault();
      clickButton();
   };

   return (
      <div className="burger-wrap"  onClick={handleClick}>
         <div className="burger">
            <span className="bar top"></span>
            <span className="bar middle"></span>
            <span className="bar bottom"></span>
         </div>
      </div> 
   )
}