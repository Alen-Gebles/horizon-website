"use client"
import React, { useState } from "react";
import "./pageFour.css";
import data from '../../data/data.json';

function PageFour() {
  const [buttonValue, setButtonValue] = useState('branding');

  const handleButtonClick = (value) => {
    setButtonValue(value);
  };

  return (
    <section className="pageFour" id="pageFour">
      <h2 className="FourHeadline">Select the full range of services<br />or simply the ones you prefer...</h2>
      <div className="serviceBox">
        <div className="fourButtonBox">
          <div className="flex flex-col gap-4 items-start sticky top-1/4 innerBtn">
            <button className={`serviceButton ${buttonValue === 'branding' ? 'text-white' : ''}`} onClick={() => handleButtonClick('branding')}>Branding</button>
            <button className={`serviceButton ${buttonValue === 'design' ? 'text-white' : ''}`} onClick={() => handleButtonClick('design')}>Web Design</button>
            <button className={`serviceButton ${buttonValue === 'development' ? 'text-white' : ''}`} onClick={() => handleButtonClick('development')}>Web Development</button>
            <button className={`serviceButton ${buttonValue === 'product' ? 'text-white' : ''}`} onClick={() => handleButtonClick('product')}>Product Overview</button>
          </div>
          
        </div>
        <div className={`fourTextBox`}>
          {data[buttonValue].map(item => (
            <div className="textBox" key={item.id}>
              <div className="w-full flex justify-between items-center mb-3">
                <h3 className="titleFour">{item.title}</h3>
                <p className="time">{item.time}</p>
              </div>
              <p className="fourText">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PageFour;