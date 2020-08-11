import React, {useState} from 'react';
import '../css/social.css';

export const Social =({img1, img2, link, name}) => {

   const [hover, setHover] = useState(false);
   
   const changeIcon = () => {
      setHover(!hover);
   }


   return (  
      <a className="icon" href={link} target="blank"><img className="social-icon" src={hover? img1 : img2} alt={name} onMouseOver={changeIcon} onMouseLeave={changeIcon}/></a>   
   )
    
 
}