import React from 'react';
import '../css/section.css';
import { Gallery } from './gallery';
import b1 from '../img/1.jpg';
import b2 from '../img/2.jpg';
import b3 from '../img/3.jpg';
import b4 from '../img/4.jpg';
import b5 from '../img/5.jpg';
import b6 from '../img/6.jpg';

export const Bouquets =() => {

   const  bouquets = [
      {
         description: "Букет невесты - от 1700 грн",
         img: b1,
         text: "Нежнейшие букеты различной формы способны подчекнуть красоту и обаяние невесты."
      },
      {
         description: "Букеты подружкам - от 1300 грн",
         img: b2,
         text: "Яркие разнообразные букеты подружкам подчеркнут индивидуальность каждой девушки."
      },
      {
         description: "Букет с пионами и пионовидной розой от 1500 грн",
         img: b6,
         text: "Букет с пионами и пионовидной розой - находка этого сезона - великолепное решение для торжества."
      },
      {
         description: "Президиум - от 2200 грн",
         img: b3,
         text: "Президиум - это место, куда будут обращены взоры гостей втечение всего вечера."
      },
      {
         description: "Оформление зоны церемонии - от 3300 грн",
         img: b5,
         text: "Зона церемоний задает тон всему торжеству."
      },
      {
         description: "Композиции на столы гостей - от 550 грн",
         img: b4,
         text: "Не обойдем вниманием мы и гостей, украсив изящными композициями праздничные столы."
      },
   ]

   return (
      <div>
        <Gallery id="bouquets" name="Букеты" items={bouquets} card={true} />
      </div>  
   )
   
}