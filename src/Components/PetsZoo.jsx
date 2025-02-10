import React from 'react'
import "../Styles/petszoo.css"
import rasm1 from "../images/yurakcha.png"
import rasm2 from "../images/pandamini.png"
import rasm3 from "../images/burgut.png"
import rasm4 from "../images/garrilla.png"
import rasm5 from "../images/crokadil.png"
import rasm6 from "../images/fill.png"
import rasm7 from "../images/madagaskar.png"
import rasm8 from "../images/tv.png"
import rasm9 from "../images/Bttnright.png"
import rasm10 from "../images/Bttnleft.png"
import rasm11 from "../images/Penguin.png"
import { NavLink } from 'react-router-dom'
function PetsZoo() {
  return (
<section className='petszoo'>
    <div className="container">
<div className="pets_top">
    <h2>Pets in zoo </h2>
    <button> <img src={rasm1} alt="" />  Choose your Favorite</button>
</div>
<div className="pets_wrapper">
<div className="pets_left">
    <div className="pets_card">
<NavLink to="pandas">
<img src={rasm2} alt="" />
</NavLink>
<div className="pets_card_con">
    <div>
<h5>Pandas</h5>
    <p>Shenshuping Gengda Panda Center</p>
    </div>
    <img className='tvvvt' src={rasm8} alt="" />
</div>
    </div>
    <div className="pets_card">
    <NavLink to="/eagles">
<img src={rasm3} alt="" />
    </NavLink>
<div className="pets_card_con">
    <div>
<h5>Eagles</h5>
    <p>Catalina Island</p>
    </div>
    <img className='tvvvt' src={rasm8} alt="" />

</div>
    </div>
    <div className="pets_card">
        <NavLink to="garillas">
<img src={rasm4} alt="" />
        </NavLink>
<div className="pets_card_con">
    <div>
<h5>Gorillas</h5>
    <p>GRACE gorillas</p>
    </div>
    <img className='tvvvt' src={rasm8} alt="" />

</div>
    </div>
    <div className="pets_card4">
<NavLink to="crocadilis">
<img src={rasm5} alt="" />
        </NavLink>
<div className="pets_card_con">
    <div>
<h5>Aligators</h5>
    <p>Alligator Park</p>
    </div>
    <img className='tvvvt' src={rasm8} alt="" />

</div>
    </div>
    <div className="pets_card5">
    <NavLink to="filles">
<img src={rasm6} alt="" />
        </NavLink>
<div className="pets_card_con">
    <div>
<h5>Elephants</h5>
    <p>Tembe Elephant Park</p>
    </div>
    <img className='tvvvt' src={rasm8} alt="" />

</div>
    </div>
    <div className="pets_card6">
    <NavLink to="madagaskaras">
<img src={rasm7} alt="" />
        </NavLink>
<div className="pets_card_con">
    <div>
<h5>Lemurs</h5>
    <p>Madagascar</p>
    </div>
    <img className='tvvvt' src={rasm8} alt="" />

</div>
    </div>
</div>
<div className="pets_right">
    <div>
<img src={rasm9} alt="" />
<img src={rasm10} alt="" />
    </div>
    <img className='rasm1111' src={rasm11} alt="" />
</div>
</div>
    </div>
</section>
  )
}

export default PetsZoo
