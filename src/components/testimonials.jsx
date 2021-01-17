import React from 'react';
import '../css/section.css';
import { Gallery } from './gallery';
import t1 from '../img/t1.png';
import t2 from '../img/t2.png';
import t3 from '../img/t3.png';

export const Testimonials =() => {

   const  testimonials = [t1, t2, t3]

   return (
      <div>
        <Gallery id="testimonials" name="Отзывы" items={testimonials} />
      </div>  
   )
   
}