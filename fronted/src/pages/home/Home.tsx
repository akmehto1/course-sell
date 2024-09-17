import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React from "react";
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

export default function Home() {
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

      <div className="services">
        <div className="service-container">
          <div className="service-content">
            <FaChalkboardTeacher className="service-icon" />
            <h3>Skilled Teacher</h3>
            <p className="description">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
        </div>
        <div className="service-container">
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
        <div className="service-container">
          <div className="service-content">
            <FaBook className="service-icon" />
            <h3>Courses</h3>
            <p className="description">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
        </div>
        <div className="service-container">
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



{/* -------------------------------------------------------------------------------Instrctire----------------------------------------------------------------------------------------------- */}

<div className="instructor">
       
</div>


    </div>
  );
}
