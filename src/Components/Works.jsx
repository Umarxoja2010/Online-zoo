import React from 'react'
import "../Styles/works.css"
import rasm1 from "../images/bannerdurbin.png" 
import rasm2 from "../images/banneryurakcha.png" 
import rasm3 from "../images/bannerqolliyurkcha.png" 
function Works() {
  return (
   <section className='works'>
    <div className="container">
<h2>How it works </h2>
<div className="works_wrapper">
    <div className="works_card">
        <img src={rasm1} alt="" />
        <span>Keep an eye on your favourite animals online</span>
    </div>
    <div className="works_card">
        <img src={rasm2} alt="" />
        <span>Become a part of the communtity</span>
    </div>
    <div className="works_card">
        <img src={rasm3} alt="" />
        <span>Support animals with the donations</span>
    </div>
</div>
    </div>
   </section>
  )
}

export default Works
