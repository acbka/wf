import React from 'react';
import '../css/section.css';
import {Section} from './section'

export const Advantages =() => {

   return (
      <div>
         <Section id="advantages" name="Наши преимущества" button={true}>
            <>
               <p className="paragraph">Решение заказать цветочное оформление свадебной церемонии в Wedding Flowers  принесет тебе ряд преимуществ</p>
               <ul>
                  <li className="paragraph">Естественность и изысканность профессионального цветочного оформления</li>
                  <li className="paragraph">Огромный ассортимент свежих цветов </li>
                  <li className="paragraph">Эксклюзивность каждого букета, каждой цветочной  композиции</li>
                  <li className="paragraph">Индивидуальный подход к каждому клиенту</li>
                  <li className="paragraph">Составление букеты для невесты с учетом ее внешности и фасона платья</li>
                  <li className="paragraph">Учет ваших творческих фантазий и финансового  состояния</li>
                  <li className="paragraph">Абсолютная оригинальность и яркость при фото и видеосъемке</li>
                  <li className="paragraph">Оптимальные цена и качество в зависимости от формы и варианта цветочной композиции</li>
                  <li className="paragraph">Бесплатная доставка при заказе полного свадебного оформления</li>
                  <li className="paragraph space-bottom">Профессионализм и гарантия качества</li>
               </ul> 
            </> 
         </Section>
      </div>  
   )
   
}