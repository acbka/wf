import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export const MenuItem = ({toggle, item, link}) => {

   return (
      //<a   className={item === current ? "item active" : "item"} name={item} href={item} onClick={handleClick}>{link}</a>
      <li className="item">
      <Link
        activeClass="active"
        to={item}
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        onClick={toggle}
      >
        {link}
      </Link>
    </li>
   )
}