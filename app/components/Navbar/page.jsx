"use client"
import "./navbar.css";
import Link from "next/link";
import React, { useEffect, useState } from 'react';

function Navbar(){
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {window.removeEventListener('scroll', handleScroll);};
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const hireUs = () => {
    return(<Link href="https://cal.com/alen-gebles-mfkyly/30min" target="_blank" className={`navLink navHire ${scrolled ? 'block' : 'hidden'}`}>Hire Us</Link>)
  }

  return(
    <>
      <nav className="nav">
        <div className="logoBox">
          <img className="logo1" src="./logo-left.png" alt="logo"></img>
          <img className="logo2" src="./logo-right.png" alt="logo"></img>
        </div>

        <div className={`navigation ${scrolled ? 'navMove' : ''} ${isOpen ? 'mobileNav' : ''}`}>
          <Link href="#pageFour" className="navLink lg:mr-6">Services</Link>
          <Link href="#pageThree" className="navLink">Portfolio</Link>
          <Link href="#PricePage" className="navLink">Plan</Link>
          <Link href="#bottomPage" className="navLink">Contact</Link>
          {hireUs()}
        </div>

        <Link href="https://cal.com/alen-gebles-mfkyly/30min" target="_blank" className="navHireBtn">
          <button>Hire us</button>
        </Link>

        <div className="hamburgerMenu">
          <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
