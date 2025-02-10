import React from 'react'
import "../Styles/hero.css"
import rasm1 from "../images/Pandabig.png"
import rasm2 from "../images/heroimgmedia.png"
function Hero() {
  return (
 <section className='hero'>
    <div className="container">
<div className="hero_wrapper">
    <div className="hero_content">
        <h1>Watch your favorite animals online</h1>
        <p>Observe different animals from around the world online in live time. Help vulunteers to take a good care of animals, donate to your favorite ones.</p>
        <button>Watch now </button>
    </div>
    <div className="hero_img">
        <img src={rasm1} alt="" />
    </div>
    <div className="hero_img_media">
        <img src={rasm2} alt="" />
    </div>
</div>
    </div>
 </section>
  )
}

export default Hero
