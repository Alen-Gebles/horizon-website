"use client"
import "./testimonial.css"
import reviews from '../../data/review.json';
import { useState } from "react";

import React from 'react'

export default function ClientTestimonial() {

  const [num, setNum] = useState(0)
    const reviewIndex = reviews[num]

    function next() {
      setNum((prev) => (prev < reviews.length - 1 ? prev + 1 : 0));
    }
  
    function prev() {
      setNum((prev) => (prev > 0 ? prev - 1 : reviews.length - 1));
    }

  return (
    <section className="ClientTestimonial">
      <div className="revBox">
          <div className="clientTitleBox">
            <h2 className="clientTitle">Client Testimonials</h2>
            <h2 className="textLeft">What our clients say about us</h2>
          </div>
          <div className="clientButtonBox">
            <button className="clientBtn" onClick={next}>Next</button>
            <button className="clientBtn" onClick={prev}>Prev</button>
          </div>
      </div>
      
      <div className="reviewContainer">
        <div className="reviewBox">
            {
              <div key={reviewIndex.id} className="review">
                <p className="reviewStars">{reviewIndex.stars}</p>
                <p className="reviewText">{reviewIndex.comment}</p>
                <p className="reviewName">{reviewIndex.author}</p>
                <p className="reviewPosition">{reviewIndex.position}</p>
              </div>
            }
        </div>
      </div>
    </section>
  )
}
