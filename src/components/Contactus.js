import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/joy/Button';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import BusinessIcon from '@mui/icons-material/Business';

export default function Contactus() {
  return (
 <>
 <section className="contact-us" id="contact-us">
    <div className="contact-us-container">
        <div className="contact-us-heading-container">
            <h2>
            We’re Here to Help
            </h2>
            <p>Have questions or need assistance? Fill out the form, and we’ll get back to you shortly.</p>
        </div>

        <div className="contactus-parts-wrapper">
        <div className="contact-us-left-wrapper">
            <form>
        <TextField id="outlined-basic" label="Your Full Name" variant="outlined" className="txtfield" required/>
        <TextField id="outlined-basic" label="Your Email Address" variant="outlined" className="txtfield" required/>
        <TextField id="outlined-basic" label="Your Conatact Num" variant="outlined" className="txtfield" required/>
        <TextField id="outlined-basic" label="Your Address" variant="outlined" className="txtfield" required/>
        <TextField label="Your Message" multiline rows={4}  variant="outlined" className="txtfield-area" required/>
        <Button type="submit" className="txtfield-area button-area">Submit Now +</Button>
        </form>
        </div>
        <div className="contact-us-right-wrapper">
            <div className="contact-us-value-wrapper">
                <h2>Contact Info 24/7</h2>
                <div className="mobile-wrapper contact-info">
                    <AddIcCallIcon className="contact-info-icons"/>
                    <h3><a href="tel:+1 (0000) 000 00">Contact: +1 (0000) 000 00</a></h3>
                </div>
                <div className="email-wrapper contact-info">
                    <MarkEmailReadIcon className="contact-info-icons"/>
                    <h3><a href="mailto:info@gmail.com">Email: devgun.info@info.com</a></h3>
                </div>
                <div className="address-wrapper contact-info">
                    <BusinessIcon className="contact-info-icons"/>
                    <h3>Address: Winnipeg, Manitoba</h3>
                </div>
            </div>

        </div>
    </div>
    </div>
 </section>
 </>
  )
}
