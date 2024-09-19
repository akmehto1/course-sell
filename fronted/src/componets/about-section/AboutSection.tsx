import React, { useEffect } from "react";
import aboutsection from "../../assets/Home/slide1.jpg";
import "./AboutSection.scss";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  useEffect(() => {

    

    // gsap.to(".about-section-title", {
    //   y: 0,
    //   opacity: .5,
    //   delay:1,
    //   scale: 1.0, // Scales the element to 1.5 times its original size
    //   duration: 1, // Duration of the animation
    //   ease: "power1.out", // Optional: Defines easing for smooth animation
    //   scrollTrigger: {
    //     trigger: ".about-section", // Trigger when `.about-container` enters the viewport
    //      start:"top 100%",
    //      markers:true,          // Optional: Visualize scroll points (can be removed in production)
    //   }
    // });


    gsap.to('.about-animation', {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      scale: 1.0, // Scales the element to 1.5 times its original size
      duration: 1.5, // Duration of the animation
      ease: "power1.out", // Optional: Defines easing for smooth animatio
      scrollTrigger: {
        trigger: ".about-section", // Trigger when `.about-container` enters the viewport
         start:"top 100%"        // Optional: Visualize scroll points (can be removed in production)
      }
    });

  }, []);

  return (
    <div className="about-animation about-section">
      <img className="about-animation about-section-profile" src={aboutsection} />
      <div className="about-animation about-section-content">
        <h3 className="about-animation about-section-title">About</h3>
        <h1 className="about-animation about-section-heading">Welcome to eLEARNING</h1>

        <p className="about-animation about-section-description1">
          Welcome to our online learning platform, where education meets
          flexibility and quality. Whether you're a beginner starting from
          scratch or an advanced learner seeking to sharpen your skills, our
          courses are designed to cater to all levels of learning.
        </p>
        <div className="about-animation about-section-description2">
          We offer a comprehensive range of subjects, with each course carefully
          structured to ensure you understand every concept in-depth. Our expert
          instructors are passionate about teaching and dedicated to helping you
          achieve your goals, providing clear explanations, real-world examples,
          and interactive learning experiences.
        </div>
        <div className="about-animation about-section-points">
          <div>
            <p className="about-animation points">Skilled Instructor</p>
          </div>
          <div>
            <p className="about-animation points">Online Courses</p>
          </div>
          <div>
            <p className="about-animation points">Proper Notes</p>
          </div>
          <div>
            <p className="about-animation points">Skilled</p>
          </div>
          <div>
            <p className="about-animation points">Skilled</p>
          </div>
          <div>
            <p className="about-animation points">Skilled</p>
          </div>
        </div>

        <Link className=" about-animation about-link" to="/about">
          Read More
        </Link>
      </div>
    </div>
  );
}
