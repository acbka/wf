import React, {useState, useEffect} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../css/nav.css';
import {Burger} from './burger';
import {Menu} from './menu'
import logo from '../img/logo.jpg';

export const Nav = () => {

   const [menuState, setMenuState] = useState(false);
   
   const isMobile = window.innerWidth < 1000;
   
   const toggleMenu = () => {
      setMenuState(!menuState);
   }

   return (
      <nav>
         <a className="navbar-brand" name="#home" href="#home">
            <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            >
               <img className="logo" src={logo} alt="logo" />
            </Link>
         </a>
         {(!isMobile || menuState) && <Menu toggle = {toggleMenu}/>}
         {isMobile && <Burger clickButton={toggleMenu} />}
      </nav>
   ) 

   {/*
   const handleClick = (e) => {
      let item = e.target.parentNode; 
      scrollMenu(item)
   }
   
   const [menuState, setMenuState] = useState(false);
   
   const isMobile = window.innerWidth < 1000;
   
   const toggleMenu = () => {
      setMenuState(!menuState);
   }
   
      
   
   const [currentUrl, setUrl] = useState("#home")

   useEffect(() => { 
      window.addEventListener('hashchange', handleHashChange); 
      return () => window.removeEventListener('hashchange', handleHashChange) 
   })

   const handleHashChange =() => 
      setUrl(document.location.hash) 

   const activeMenuItem = (item) => {   
      toggleMenu()
      scrollMenu(item);
    }
   
   const  scrollMenu = (item) => {
      let V = .1;
      let w = window.pageYOffset; 
      let t = document.querySelector(item.name).getBoundingClientRect().top;
      let start = null;

      const step = (time) => {

         if (start === null) start = time;

         let progress = time - start;
         let r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
         window.scrollTo(0, r); 

         if (r !== w + t) {
            requestAnimationFrame(step)
         } else { 
            window.scrollTo(0, t + w - 80) 
         }
      };
      requestAnimationFrame(step);
      
   }

   //scrollMenu(currentUrl); 

   return (
      <nav>
         <a className="navbar-brand" name="#home" href="#home" onClick={handleClick}><img className="logo" src={logo} alt="logo" /></a>
         {(!isMobile || menuState) && <Menu activeMenuItem={activeMenuItem} current={currentUrl} />}
         {isMobile && <Burger clickButton={toggleMenu} />}
      </nav>
   )
   */}
}