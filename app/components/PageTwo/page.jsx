"use client"
import { useEffect, useRef } from 'react';
import styles from './pageTwo.css'; // Assuming you have CSS modules set up

function PageTwo() {
  const cardRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    angle = (angle + 360) % 360;

    cardRef.current.style.setProperty("--start", angle + 60);
  }

  return (
    <section id="pageTwo">
      <div className="twoBox card" ref={cardRef}>
        <div className="glow"></div>
        <div className='innerBox'>
          <div className='perfectBox'>
            <div className='coverText'></div>
            <p className='perfect'>Perfect for Saas & Agencies</p>
          </div>
          
          <h2>
            Professional design and development.<br />Superior quality & speed.
          </h2>
          <p className="textinner">
              Delivering perfection, without unnecessary complexity.
          </p>
          <button className='doBtn'>Our Services</button>
        </div>
      </div>
    </section>
  );
}

export default PageTwo;


