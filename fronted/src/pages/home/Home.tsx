import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./Home.scss";
import service_teacher from "../../assets/Home/service_teacher.png";
import service_online_teacher from "../../assets/Home/service-online-education.png";
import service_notes from "../../assets/Home/service_notes.png";
import service_book from "../../assets/Home/service_book.png";

import ReactImg from "../../assets/Home/slide1.jpg";
import ReactImg2 from "../../assets/Home/slide2.jpg";
import { PiStudent } from "react-icons/pi";
import { FaBook, FaChalkboardTeacher } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { FaRegNoteSticky } from "react-icons/fa6";
import TeacherCard from "../../layouts/Teacher";
import AboutSection from "../../componets/about-section/AboutSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin
import ContactSection from '../../componets/contact-section/ContactSection.tsx'
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
 
  useEffect(() => {
    gsap.to(".course-rating", { delay: 1, z: 0, opacity: 1, duration: 1 });

    // Title of slider animation
    gsap.to("#title_of_slider", { delay: 1.4, z: 0, opacity: 1, duration: 1 });

    // Description of slider animation
    gsap.to("#description_of_slider", {
      delay: 1.6,
      z: 0,
      opacity: 1,
      duration: 1,
    });

    // Animation for service section on scroll
    gsap.to('.service-animation', {
      x: 0,
      opacity: 1.0,
      duration:.8,
      stagger: 0.4,
      scale:1.0,
      scrollTrigger: {
        trigger: ".services", // Trigger when `.about-container` enters the viewport
         start:"top 100%"          // Optional: Visualize scroll points (can be removed in production)
      }
    });



    gsap.to('.in-animation', {
      x: 0,
      opacity: 1.0,
      duration:.8,
      stagger: 0.4,
      scale:1.0,
      scrollTrigger: {
        trigger: ".in", // Trigger when `.about-container` enters the viewport
         start:"top 100%"          // Optional: Visualize scroll points (can be removed in production)
      }
    });

  }, []);






  return (
    <div className="home">
      {/* -------------------------------------------------------------------------------slider----------------------------------------------------------------------------------------------- */}

      <div className="slider">
        <CCarousel controls transition="crossfade">
          <CCarouselItem className="slide-container">
            <CImage
              className="d-block slide-img"
              src={ReactImg}
              alt="slide 1"
            />
            <div className="slide-content">
              <p className="course-rating">Best Online courses</p>
              <h1 id="title_of_slider" className="title">
                The Best Online Learning Platform
              </h1>
              <p id="description_of_slider" className="description">
                Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                sanctus eirmod elitr.
              </p>
            </div>
          </CCarouselItem>
          <CCarouselItem className="slide-container">
            <CImage
              className="d-block slide-img w-100"
              src={ReactImg2}
              alt="slide 2"
            />
            <div className="slide-content">
              <p className="course-rating">Best Online courses</p>
              <h1 className="title">The Best Online Learning Platform</h1>
              <p className="description">
                Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                sanctus eirmod elitr.
              </p>
            </div>
          </CCarouselItem>
          <CCarouselItem className="slide-container">
            <CImage
              className="d-block slide-img w-100"
              src={ReactImg}
              alt="slide 3"
            />
            <div className="slide-content">
              <p className="course-rating">Best Online courses</p>
              <h1 className="title">The Best Online Learning Platform</h1>
              <p className="description">
                Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                sanctus eirmod elitr.
              </p>
            </div>
          </CCarouselItem>
        </CCarousel>
      </div>

      {/* -------------------------------------------------------------------------------service----------------------------------------------------------------------------------------------- */}

      <div className="service-animation services">
        <div className=" service-animation service-container">
          <div className="service-content">
            <FaChalkboardTeacher className="service-icon" />
            <h3>Skilled Teacher</h3>
            <p className="description">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
        </div>
        <div className="service-animation service-container">
          <div className="service-content">
            {/* <img src={service_online_teacher} className="service-icon" /> */}
            <SiGoogleclassroom className="service-icon" />
            <h3>Online Classes</h3>
            <p className="description">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
        </div>
        <div className="service-animation service-container">
          <div className="service-content">
            <FaBook className="service-icon" />
            <h3>Courses</h3>
            <p className="description">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
        </div>
        <div className="service-animation service-container">
          <div className="service-content">
            <FaRegNoteSticky className="service-icon" />
            <h3>Notes</h3>
            <p className="description">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
        </div>
      </div>

      {/* about */}

      <div className="about-container">
        <AboutSection />
      </div>

      {/* -------------------------------------------------------------------------------Instrctire----------------------------------------------------------------------------------------------- */}

      {/* in is instructor */}

      <div className="in in-animation">
        <div className="in-content">
          <h6 className=" in-animation in-title">instructor</h6>
          <div className="in-animation in-heading">Expert Instructor</div>
        </div>

        <div className="in-container">
          <div className="in-animation in-flex-box">
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
          </div>
        </div>
      </div>


      <ContactSection/>
       
    </div>
  );
}
