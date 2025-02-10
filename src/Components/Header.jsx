import React, { useRef } from 'react'
import rasm1 from "../images/Headerlogo.png"
import rasm2 from "../images/headeraccountt.png"
import rasm3 from "../images/headersearch.png"
import rasm4 from "../images/Burger.png"
import "../Styles/header.css"
import { NavLink } from 'react-router-dom'
function Header() {
    let modal = useRef()
    function openModal (){
        modal.current.classList.add("show")
        }
        
        function closeModal(){
        modal.current.classList.remove("show")
        }
  return (
<section className='header'>
    <div ref={modal} className="modal">
        <div className="modal_top">
            <img src={rasm1} alt="" />
            <img onClick={closeModal} src={rasm4} alt="" />
        </div>
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
                        <li>contact us</li>
                        <li>design</li>
    </ul>
    </div>
    <div className="container">
        <div className="header_wrapper">
            <div className="header_left">
                <img className='header_left_img' src={rasm1} alt="" />
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
                        <li>contact us</li>
                        <li>design</li>
                    </ul>
            </div>
            <div className="header_right">
                <img src={rasm3} alt="" />
                <img src={rasm2} alt="" />
            </div>
            <div className="burger">
                <img onClick={openModal} src={rasm4} alt="" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Header
