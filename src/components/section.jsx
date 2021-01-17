import React from 'react';
import '../css/section.css';
import {Button} from './button';

export const Section =({id, name, button, children}) => {

   return (
      <div id={id}>
         <div className="container">   
            <h2>{name}</h2>     
            {children}               
            {button && <Button/>}
         </div>
      </div>  
   )
   
}