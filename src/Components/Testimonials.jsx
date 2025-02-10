import React from 'react'
import rasm1 from "../images/jingalakkalla.png"
import rasm2 from "../images/Ellipse 15.png"
import rasm3 from "../images/Ellipse 16.png"
import "../Styles/testimonials.css"
function Testimonials() {
  return (
<section className='Testimonials'>
    <div className="container">
<div className="testimonials_top">
    <h2>Testimonials</h2>
    <button>Leave feedback</button>
</div>
<div className="testimonials_orta">
  <div className="testimonials_orta_div">
  <span>20 Decepmer 2020</span>
  <p>Awesome place to observe my favourite aligators at Florida, the quality of the video is great. </p>
  </div>
  <div className="testimonials_orta_div">
  <span>20 Decepmer 2020</span>
  <p>Awesome place to observe my favourite aligators at Florida, the quality of the video is great. </p>
  </div>
  <div className="testimonials_orta_div">
  <span>20 Decepmer 2020</span>
  <p>Awesome place to observe my favourite aligators at Florida, the quality of the video is great. </p>
  </div>
  <div className="testimonials_bottom_div">
    <img src={rasm1} alt="" />
    <h6>Adam, Spain</h6>
  </div>
  <div className="testimonials_bottom_div">
    <img src={rasm2} alt="" />
    <h6>Adam, Spain</h6>
  </div>
  <div className="testimonials_bottom_div1">
    <img src={rasm3} alt="" />
    <h6>Adam, Spain</h6>
  </div>
</div>
    </div>
</section>
  )
}

export default Testimonials
