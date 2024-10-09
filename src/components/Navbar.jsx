import React, { useState } from 'react';
import './Navbar.css';
import menu_open from '../assets/menu.svg';
import menu_close from '../assets/close.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='navbar'>
      <div className='nav-head'>
        <h1 className='ta'>Triad Alchemy</h1>
        
        <img
          src={menu_open}
          className={`nav-mob-open ${isMobileMenuOpen ? 'hidden' : ''}`}
          alt='open menu'
          onClick={handleMenuToggle}
        />
      </div>

      <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        
        <img
          src={menu_close}
          className={`nav-mob-close ${isMobileMenuOpen ? '' : 'hidden'}`}
          alt='close menu'
          onClick={handleMenuToggle}
        />
        <li><a href='#hero'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#work'>Brochure</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
