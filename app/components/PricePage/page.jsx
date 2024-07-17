"use client";

import React, { useState } from 'react';
import './pricePage.css';
import Link from 'next/link';
import Transition from '../../Transition';

export default function PricePage() {
  const [bubble, setBubble] = useState(true);
  const [transitionKey, setTransitionKey] = useState(0); // State variable to force re-render

  const plans = [
    {
      name: bubble ? 'Single Page' : 'Design',
      price: bubble ? '$2000' : '$3300',
      payment: bubble ? 'One Time Pay' : 'Paid Monthly',
      features: [
        bubble ? 'High-Impact Landing Page' : 'UI/UX Design',
        bubble ? 'Quick Turnaround Time' : 'Branding and Visual Identity',
        bubble ? 'Minimalist Design Approach' : 'Prototyping and Wireframing',
        bubble ? 'Mobile Optimization' : 'Graphic Design'
      ]
    },
    {
      name: bubble ? 'Custom Plan' : 'Platinum Plan',
      price: bubble ? 'Custom' : '$7500',
      payment: bubble ? 'One Time Pay' : 'Paid Monthly',
      features: [
        bubble ? 'Tailored Solution Design' : 'Executive Team',
        bubble ? 'Dedicated Project Manager' : 'Custom Website Design',
        bubble ? 'Comprehensive Code Review' : 'SEO Optimization',
        bubble ? 'Flexible Schedule' : 'Support and Maintenance'
      ]
    },
    {
      name: bubble ? 'Standard E-Shop' : 'Development',
      price: bubble ? '$3500' : '$4200',
      payment: bubble ? 'One Time Pay' : 'Paid Monthly',
      features: [
        bubble ? 'Integrated Payment Solutions' : 'Front-End Development',
        bubble ? 'Product Management System' : 'Back-End Development',
        bubble ? 'Customer Account Features' : 'Performance Optimization',
        bubble ? 'Executive Team Consultation' : 'API Integration'
      ]
    }
  ];

  const handleClick = (value) => {
    setBubble(value);
    setTransitionKey((prev) => prev + 1); // Update transition key
  };

  return (
    <section className='pricePage' id='PricePage'>
      <h1 className='priceTitle'>Get Started with the Right Plan</h1>
      <div className='priceBtnBox'>
        <div key={transitionKey} className={`priceBubble ${bubble ? 'swipeLeft' : 'swipeRight'}`}></div>
        <button className={`priceBtn ${bubble ? 'priceBtnActive' : ''}`} onClick={() => handleClick(true)}>One Deployment</button>
        <button className={`priceBtn ${bubble ? '' : 'priceBtnActive'}`} onClick={() => handleClick(false)}>Monthly Subscription</button>
      </div>
      <Transition key={transitionKey}>
        <div className='priceCardsBox'>
          {plans.map((plan, index) => (
            <div key={index} className={`priceCard ${index === 1 ? 'platinumPlan' : index === 2 ? 'premiumPlan' : ''}`}>
              <p className='planName'>{plan.name}</p>
              <p className='planPrice'>{plan.price}</p>
              <p className='planPayment'>{plan.payment}</p>
              <ul className='planList'>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link href="https://cal.com/alen-gebles-mfkyly/30min" target='_blank' className='planButton'>Book a Call</Link>
            </div>
          ))}
        </div>
      </Transition>
    </section>
  );
}
