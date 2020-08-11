import React from 'react';
import '../css/card.css'

export const Card = ({description, img, text}) => {

   return (
      <div className="example-bouquet">
         <div className="card">
            <img src={img} alt="bouquet" className="img-bouquet" />
            <div className="img-layer">
               <p className="img-description">{description}</p>
            </div>
         </div>
            <p className="bouquet-text">{text}</p>
   </div>
   )
}