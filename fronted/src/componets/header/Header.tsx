import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

export default function Header() {
  return (
    <div className='header'>
         <div className="logo">
    
            <h1 className='heading-title'>eLEARNING</h1></div>
          <div className="all-route-link">

             <Link className='route' to="/home">home</Link>
             <Link className='route' to="/about">about</Link>
             <Link className='route' to="/courses">course</Link>
             <Link className='route' to="/contact">Contact</Link>

          </div>
          <div className="join-btn"><p className='join-para'>Join Now</p></div>
    </div>
  )
}
