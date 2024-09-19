import React from 'react'
import './Teacher.scss'
import profile from '../assets/Home/profile1.jpg';
import { FaFacebookSquare, FaInstagram, FaPhoneSquareAlt, FaWhatsappSquare } from 'react-icons/fa';

export default function TeacherCard() {
  return (
    <div className='teacher in-animation'>
          <div className='teacher-profile'>
          <img  className='profile' src={profile}></img>
          </div>
         
          <div className="social-icons">
          <FaInstagram />
          <FaFacebookSquare />
          <FaWhatsappSquare />
          </div>
          <div className="teacher-name">
            <h2>Kamta prasad</h2>
            <p>Math Teacher with experience of 20 year plus</p>
          </div>
    </div>
  )
}
