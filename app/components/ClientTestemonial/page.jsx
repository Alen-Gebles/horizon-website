"use client"
import "./testimonial.css"
import reviews from '../../data/review.json';
import { useState } from "react";
import Transition from '../../Transition'

import React from 'react'

export default function ClientTestimonial() {

  const [num, setNum] = useState(0);
  const [transitionKey, setTransitionKey] = useState(0); // State variable to force re-render

  const reviewIndex = reviews[num];

  function next() {
    setNum((prev) => {
      const newNum = prev < reviews.length - 1 ? prev + 1 : 0;
      setTransitionKey(newNum); // Update transition key
      return newNum;
    });
  }

  function prev() {
    setNum((prev) => {
      const newNum = prev > 0 ? prev - 1 : reviews.length - 1;
      setTransitionKey(newNum); // Update transition key
      return newNum;
    });
  }

  return (
    <section className="ClientTestimonial">
      <div className="revBox">
        <div className="clientTitleBox">
          <h2 className="clientTitle">Client Testimonials</h2>
          <h2 className="textLeft">What our clients say about us</h2>
        </div>
        <div className="clientButtonBox"> 
          <button className="clientBtn" onClick={prev}><svg className="arrowClient" width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#ffffff"></path> </g></svg></button>
          <button className="clientBtn" onClick={next}><svg className="arrowClient" width="auto" height="auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#ffffff"></path> </g></svg></button>
        </div>
      </div>
      
      <div className="reviewContainer">
        <div className="reviewBox">
          <Transition key={transitionKey}>
            {
              <div key={reviewIndex.id} className="review">
                <p className="reviewStars">{reviewIndex.stars}</p>
                <p className="reviewText">{reviewIndex.comment}</p>
                <p className="reviewName">{reviewIndex.author}</p>
                <p className="reviewPosition">{reviewIndex.position}</p>
              </div>
            }
          </Transition>
        </div>
      </div>
    </section>
  )
}
