import React from 'react'
import './bottomPage.css'
import Link from 'next/link'

export default function BottomPage() {
  return (
    <section className='bottomPage' id='bottomPage'>
      <div className='bottomPageleft'>
        <img className='bottomLogo' src='./logo-right.png' />
        <div className='logoBox'>
          <p>Linkedin</p>
          <p>twitter</p>
        </div>
      </div>
      <div className='bottomPageLinks'>
        <div className='bottomGridItems'>
          <h3 className='linkTitle'>Partners</h3>
          <Link href="#" className='bottomLinks'>Partner with Us</Link>
          <Link href="#" className='bottomLinks'>Refer a friend</Link>
        </div>

        <div className='bottomGridItems'>
          <h3 className='linkTitle'>Company</h3>
          <Link href="#" className='bottomLinks'>About us</Link>
          <Link href="#" className='bottomLinks'>Careers</Link>
          <Link href="#" className='bottomLinks'>Book a demo</Link>
        </div>

        <div className='bottomGridItems'>
          <h3 className='linkTitle'>Resources</h3>
          <Link href="#" className='bottomLinks'>Customers</Link>
          <Link href="#" className='bottomLinks'>Blog</Link>
          <Link href="#" className='bottomLinks'>Community</Link>
        </div>

        <div className='bottomGridItems'>
          <h3 className='linkTitle'>Legal</h3>
          <Link href="#" className='bottomLinks'>Terms of Service</Link>
          <Link href="#" className='bottomLinks'>Privacy Policy</Link>
        </div>
      </div>
    </section>
  )
}
