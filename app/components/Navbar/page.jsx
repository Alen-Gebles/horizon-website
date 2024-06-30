"use client"
import "./navbar.css"
import Link from "next/link"
import React, { useEffect, useState } from 'react';

function Navbar(){

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const hireUs = () => {
    return(
      <Link href="#" className={`navLink navHire ${scrolled ? 'block' : 'hidden'}`}>Hire Us</Link>
    )
  }
  return(
    <>
    <nav className="navigation">
      <Link href="#" className="navLink mr-6">Services</Link>
      <Link href="#" className="navLink">Portfolio</Link>
      <Link href="#" className="navLink">Team</Link>
      <Link href="#" className="navLink">Insights</Link>
      <Link href="#" className="navLink">FAQ</Link>
      {hireUs()}
    </nav>
    </>
  )
}

export default Navbar