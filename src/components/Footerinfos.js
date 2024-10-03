import React from 'react'

export default function Footerinfos() {
  return (
    <>
    <section className="footer-info">
      <div className="footer-info-wrapper">
        <div className="footer-info-left">
          <h2><a href="#navbar">Devman</a></h2>
        </div>
        <div className="footer-info-center ">
          <h2>Userful Links</h2>
          <ul className="footer-ul">
          <li><a href="#navbar">Home</a></li>
         <li><a href="#aboutus">About</a></li>
         <li><a href="#ourservices">Services</a></li>
         <li><a href="#contact-us">Contact</a></li>
          </ul>
          
        </div>
        <div className="footer-info-right">
        <h2>Contact</h2>
        <ul className="footer-ul">
          <li><a href="mailto:info@gmail.com">Email: devgun.info@info.com</a></li>
         <li><a href="tel:+1 (0000) 000 00">Contact: +1 (0000) 000 00</a></li>
         <li><a href="/">Address: Winnipeg, Manitoba</a></li>
          </ul>
        </div>
        
      </div>

      <div className="footer-copyright-info">
        <h3>Copyright by @mantejdevgun. All rights reserved {(new Date().getFullYear())}.</h3>
      </div>

      <div class="developed-by">Designed & Developed By <a href="https://www.panesarsoft.com" target="_blank">PANESARSOFT</a></div>
      
    </section>
    </>
  
)
}
