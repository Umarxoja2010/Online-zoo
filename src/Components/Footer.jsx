import React from 'react'
import "../Styles/footer.css"
import { NavLink } from 'react-router-dom'
import rasm1 from "../images/Headerlogo.png"
function Footer() {
  return (
<section className='footer'>
<div className="container">
        <div className="footer_wrapper">
            <div className="footer_left">
                <img className='footer_left_img' src={rasm1} alt="" />
                    <ul>
                        <NavLink to="/">
                        <li>about</li>
                        </NavLink>
                        <NavLink to="/map">
                        <li>MAP</li>
                        </NavLink>
                        <NavLink to="/zoos">
                        <li>Zoos</li>
                        </NavLink>
                        <li>contact</li>
                        <li>design</li>
                    </ul>
            </div>
            <div className="header_right">
              <p className='header_right_p'>Design by Lemeshko Kateryna
              ©RSSchool and ©Yem Digital 2021</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Footer
