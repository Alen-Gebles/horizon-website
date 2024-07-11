"use client"
import React, { useEffect } from 'react';
import './landing-page.css'; 
import Link from 'next/link';

function LandingPage() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.querySelector(".imageScroller").style.transform = `translateX(-${scrollY}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const imageGroup = () => {
    return(
      <>
        <div className="imgHolder"><div className="imgBg"></div><img className="scrImg" loading="lazy" src="./landingImages/image1.png" alt="Image 1"></img></div>
        <div className="imgHolder"><div className="imgBg"></div><img className="scrImg" loading="lazy" src="./landingImages/image2.png" alt="Image 2"></img></div>
        <div className="imgHolder"><div className="imgBg"></div><img className="scrImg" loading="lazy" src="./landingImages/image3.png" alt="Image 3"></img></div>
        <div className="imgHolder"><div className="imgBg"></div><img className="scrImg" loading="lazy" src="./landingImages/image4.png" alt="Image 4"></img></div>
      </>
    )
  }

  return (
    <section id="landing_page">
      <div className="MainTextBox">
        <h1 className="landingText">Your Online Presence</h1>
        <h2 className="landingSubText">Crafted with Precision, Powered by Vision.</h2>
      </div>
      <Link href="#pageThree" className='actionBtn'>Explore our work</Link>
      <div className="imageScroller">
        {imageGroup()}
        {imageGroup()}
      </div>
    </section>
  );
}

export default LandingPage;
