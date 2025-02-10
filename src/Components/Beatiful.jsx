import React from 'react'
import "../Styles/beautiful.css"
import rasm1 from "../images/minipanda.png"
import rasm2 from "../images/minigorilla.png"
import rasm3 from "../images/miniburgut.png"
import rasm4 from "../images/minicrocodil.png"
import { NavLink } from 'react-router-dom'
function Beatiful() {
  return (
<section className='beautiful'>
    <div className="container">
<h2>Look at this beautiful animals</h2>
<div className="beautiful_wrapper">
    <div className="beautiful_card">
        <NavLink to="pandas">
<img src={rasm1} alt="" />
        </NavLink>
<h4>Pandas</h4>
    </div>
    <div className="beautiful_card">
        <NavLink to="garillas">
<img src={rasm2} alt="" />
        </NavLink>
<h4>Gorillas</h4>
    </div>
    <div className="beautiful_card">
        <NavLink to="eagles">
<img src={rasm3} alt="" />
        </NavLink>
<h4>Eagles</h4>
    </div>
    <div className="beautiful_card">
        <NavLink to="crocadilis">
<img src={rasm4} alt="" />
        </NavLink>
<h4>Aligators</h4>
    </div>
</div>
    </div>
</section>
  )
}

export default Beatiful
