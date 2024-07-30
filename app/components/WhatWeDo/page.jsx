import React from 'react'
import './whatWeDo.css'

export default function WhatWeDo() {
  return (
    <>
    <section className='whatWeDo'>
      <h1 className='whatWeDoTitle'><span>What</span> we do</h1>
      <div className='qBox'>
        <div className='qLine qOne'></div>
        <img className='questionSvg' src="./question-mark.svg" alt="question" />   
        <div className='qLine qTwo'></div>
      </div>
      <h3 className='whatWeDoSubTitle'>
          We specialize in small business web design and development for clients globally. Every line of code is written by hand to ensure optimal performance, attracting more customers to your site and boosting your business&#39;s revenue. 
      </h3>
      <div className='whatContainer'>
        <div className='whatBox'>
          <img className='whatImg' src="./booking.png" alt="image duh" />
            <h2 className='whatTitle'>Mobile-First Design</h2>
            <p className='whatText'>We begin by designing your site for mobile devices and then expand the design to ensure it works seamlessly on tablets and desktops.</p>
        </div>

        <div className='whatBox'>
          <img className='whatImg' src="./monitor.png" alt="image duh" />
            <h2 className='whatTitle'>Fully Responsive</h2>
            <p className='whatText'>Your site will be optimized for all screen sizes, from smartphones to tablets and desktops, ensuring that clients can access it effortlessly from any device.</p>
        </div>

        <div className='whatBox'>
          <img className='whatImg' src="./page-speed.png" alt="image duh" />
            <h2 className='whatTitle'>Optimization</h2>
            <p className='whatText'>With mobile devices accounting for 55% of all internet traffic, we ensure your mobile site is fully optimized to achieve peak performance in search engine rankings.</p>
        </div>
      </div>
    </section>
    </>
  )
}
