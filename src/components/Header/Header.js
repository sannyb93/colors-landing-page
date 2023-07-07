import React , { useState } from 'react';
import './Header.css';
const Header = props => {

    const menu = document.querySelector('#mobile-menu');
    const navLogo = document.querySelector('#navbar__logo');
    const menuLinks = document.querySelector('.navbar__menu');
    
    //display menu
    const MobileMenu = props =>{

    document.querySelector('#mobile-menu').classList.toggle('is-active');
    document.querySelector('.navbar__menu').classList.toggle('active');
    }

    //hide mobile menu

const HideMobileMenu = () =>{
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        document.querySelector('#mobile-menu').classList.toggle('is-active');
        document.querySelector('.navbar__menu').classList.remove('active');
    }
};

//shaw active menu when scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    homeMenu.classList.add('highlight');
    let scrollpos = window.scrollY

    //adds "highlight" class to my menu items
    if(window.innerWidth > 960 && scrollpos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }else if (window.innerWidth > 960 && scrollpos < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return
    }
    else if (window.innerWidth > 960 && scrollpos < 2345){
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');

        return
    }
    if(elem && window.innerWidth < 960 && scrollpos < 600 || elem){
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);





 

    return(
      <nav className="navbar">
      <div className="navbar__container">
          <a href="#" onClick={HideMobileMenu} id="navbar__logo">COLOR</a>
          <div className="navbar__toggle" onClick = {MobileMenu} id="mobile-menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </div>

          <ul className="navbar__menu" >
              <li className="navbar__item">
                  <a href="#" className="navbar__links" onClick={HideMobileMenu} id="home-page">Home</a>
              </li>
              <li className="navbar__item">
                  <a href="#about" className="navbar__links" onClick={HideMobileMenu} id="about-page">About</a>
              </li>
              <li className="navbar__item">
                  <a href="#services" className="navbar__links" onClick={HideMobileMenu} id="services-page">Services</a>
              </li>
              <li className="navbar__btn">
                  <a href="#signup" className="button"  id="signup">Sign Up</a>
              </li>
          </ul>
      </div>
  </nav>
    );
};

export default Header;