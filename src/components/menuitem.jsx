import React from 'react';

export const MenuItem = ({current, item, link, scroll}) => {

   const handleClick = (e) => {
      scroll(e.target);
   }

   return (
      <a   className={item === current ? "item active" : "item"} name={item} href={item} onClick={handleClick}>{link}</a>
   )
}
