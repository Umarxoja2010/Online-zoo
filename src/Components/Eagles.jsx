import React from 'react'
import "../Styles/pandas.css"
import rasm1 from "../images/minipanda.png"
import rasm2 from "../images/miniburgut.png"
import rasm3 from "../images/minigorilla.png"
import rasm4 from "../images/minicrocodil.png"
import rasm5 from "../images/undov.png"
import rasm6 from "../images/lov.png"
import rasm7 from "../images/burgucha1.jpg"
import rasm8 from "../images/burgutcha2.jpg"
import rasm9 from "../images/burgutcha3.jpg"
import rasm10 from "../images/pandaback.png"
import rasm11 from "../images/oq.png"
import { NavLink } from 'react-router-dom'
function Eagles() {
  return (
    <section className='pandas'>
    <div className="container">
        <div className="pandas_wrapper">
<div className="pandas_left">
    <NavLink to="/pandas">
    <img src={rasm1} alt="" />
    </NavLink>
    <NavLink to="/eagles">
    <img src={rasm2} alt="" />
    </NavLink>
    <NavLink to="/garillas">
<img src={rasm3} alt="" />
    </NavLink>
    <NavLink to="/crocadilis">
<img src={rasm4} alt="" />
    </NavLink>
</div>
<div className="pandas_right">
    <div className="pandos_right_top">
        <h2>eagles</h2>
        <div className='pandos_right_top_div'>
            <img src={rasm5} alt="" />
            <img src={rasm6} alt="" />
        </div>
    </div>
<h6>Main cameras</h6>
<iframe  className='pandas_video'  src="https://www.youtube.com/embed/4y00qWli1-U?si=GR3wOvG9JqY8iI_t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<h6>Side cameras</h6>
<div className="pandas_img_collecsiya">
    <img src={rasm7} alt="" />
    <img src={rasm8} alt="" />
    <img src={rasm9} alt="" />
</div>
<div className="pandas_information">
    <div className="pandas_information_left">
        <h2>Information</h2>
        <span>Zoo</span>
        <a href="https://www.lovecatalina.com/island-info/about-catalina-island/wildlife/bald-eagles/">SCatalina Island</a>
        <span>Type of aviary</span>
        <p>Imitation of the natural environment</p>
        <span>Habitat</span>
        <a href="https://en.wikipedia.org/wiki/Eagle">Habitat</a>
        <span>Population in the world</span>
        <p>In 2020, seven pairs of Bald Eagles nested on Catalina Island and four chicks fledged.</p>
        <p>Population in the world</p>
        <span>Type of food</span>
        <p>Fish</p>
    </div>
    <div className="pandas_information_right">
        <h2>Interesting Facts</h2>
<div>
        <img src={rasm11} alt="" />
        <p>The Giant Pandas are omnivores. But whilst pandas will occasionally eat small animals and fish, bamboo counts for 99 percent of their diet.</p>
</div>
<div>
        <img src={rasm11} alt="" />
        <p>Pandas are BIG eaters – every day they fill their tummies for up to 12 hours, shifting up to 12 kilograms of bamboo.</p>
</div>
<div>
<img src={rasm11 }alt="" />
        <p>The giant panda’s scientific name is Ailuropoda melanoleuca, which means “black and white cat-foot”.</p>
</div>
<div>
        <img src={rasm11 }alt="" />
        <p>Female pandas give birth to one or two cubs every two years. Cubs stay with their mothers for 18 months before venturing off on their own.</p>
</div>
<div>
        <img src={rasm11 }alt="" />
        <p>These beautiful bears are endangered, and it’s estimated that only around 1,000 remain in the wild. That’s why we need to do all we can to protect them!</p>
</div>
    </div>
</div>
</div>
</div>
    </div>
    <div className="pandas_bottom">
    <img src={rasm10} alt="" />
</div>
</section>
  )
}

export default Eagles
