import React from 'react';
import image from './assets/img/hero-img-2.png';
export default function Slider() {
  return (
   <>
   <section className="slider">
    <div className="slider-container">
        <div className="slider-left-wrapper">

<h1>World's Leading Assignment Help Service</h1>
<p>Seeking <span class="highlighter">Assistance</span> from a Premier Assignment Service?</p>

        </div>
        <div className="slider-right-wrapper">
            <img src={image} alt="" className="hero-img" />
        </div>
    </div>
   </section>
   </>
  )
}
