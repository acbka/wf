import React from 'react';
import '../css/gallery.css';
import {Card} from './card';
import { Button } from './button';

export const Gallery =({id, name, items, button, card}) => {

   const list = items.map((item,index) => {
      if (card) {
         return <Card description={item.description} img={item.img} text={item.text} key={index}/>
      } else {
         return <div key={index}><img src={item} alt="testimonial" /></div>
      } 
   })
   
   return (
      <div id={id}>
         <div className="container">
            <h2>{name}</h2>
            <div className="gallery">
               {list}
            </div>
            {button && <Button />}
         </div>
      </div>  
   )
    
 
}