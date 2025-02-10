import React from 'react'
import "../Styles/pandas.css"
import rasm1 from "../images/minipanda.png"
import rasm2 from "../images/miniburgut.png"
import rasm3 from "../images/minigorilla.png"
import rasm4 from "../images/minicrocodil.png"
import rasm5 from "../images/undov.png"
import rasm6 from "../images/lov.png"
import rasm7 from "../images/aligateres1.jpg"
import rasm8 from "../images/aligateres2.jpg"
import rasm9 from "../images/aigateres3.avif"
import rasm10 from "../images/pandaback.png"
import rasm11 from "../images/oq.png"
import { NavLink } from 'react-router-dom'
function Garillas() {
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
        <h2>Aligators</h2>
        <div className='pandos_right_top_div'>
            <img src={rasm5} alt="" />
            <img src={rasm6} alt="" />
        </div>
    </div>
<h6>Main cameras</h6>
<iframe className='pandas_video'  src="https://www.youtube.com/embed/v-IBajYOGNg?si=OOiLF2YTGbt88ZiD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
        <a href="https://www.alligatorfarm.com/">St. Augustine's Alligator Farm Zoological Park</a>
        <span>Type of aviary</span>
        <p>Imitation of the natural environment</p>
        <span>Habitat</span>
        <a href="https://en.wikipedia.org/wiki/St._Augustine_Alligator_Farm_Zoological_Park"> Southeastern United States and northeastern Mexico</a>
        <span>Type of food</span>
        <p>Fish, amphibians, reptiles, birds, and mammals</p>
        <p>Population in the world</p>
        <span>About species</span>
        <p>The yards at Shenshuping Gengda Panda Center in China's Wolong Valley are filled with bamboo--making for some very happy panda residents.</p>
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

export default Garillas
