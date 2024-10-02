import React from 'react';
import aboutusimage from './assets/img/history-img.png';

export default function Aboutus() {
  return (
    <>
    <section className="aboutus" id="aboutus">
        <div className="aboutus-wrapper">
            <div className="aboutus-left-wrapper">
                <img src={aboutusimage} alt="" className="aboutus-img" />
            </div>
            <div className="aboutus-right-wrapper">
                <h2>About Us</h2>
                <h3>Your Trusted Partner for Academic Success</h3>
                <p>Our company is a leading provider of assignment help services, dedicated to assisting students in achieving academic excellence. With a team of highly qualified experts across various disciplines, we offer personalized support tailored to meet individual needs. Our commitment to quality ensures that every assignment is thoroughly researched, well-structured, and delivered on time. We understand the pressures students face, which is why we offer 24/7 customer support and flexible pricing to accommodate all budgets. Our mission is to help students succeed by providing reliable and efficient services. Whether it's an essay, dissertation, or project, we are here to help you excel in your academic journey. Trust us to be your partner in success.</p>
            </div>
        </div>
    </section>
    </>
  )
}
