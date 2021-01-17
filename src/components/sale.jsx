import React from 'react';
import '../css/section.css';
import {Section} from './section';
import sale from '../img/sale.png';

export const Sale =() => {

   return (
      <div>
         <Section id="sale" name="Акция" button={true}>
            <>
               <div className="flex"> 
                  <div className="sale-text">
                     <p className="paragraph">С началом летнего сезона не пропустите нашу акцию!</p>
                     <p className="paragraph action">При заказе 5 букетов подружкам невесты - оформление президиума бесплатно!</p>
                     <p className="paragraph">Начинай воплощать свою мечту прямо сейчас! Звони!</p>
                  </div>
                  <div className="sale-img-wrap">
                     <img className="sale-img" src={sale} alt="sale" />
                  </div>
               </div>
            </>
         </Section>
      </div>  
   )
   
}