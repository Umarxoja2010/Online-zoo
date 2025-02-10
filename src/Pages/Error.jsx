import React from 'react'
import "../Styles/error.css"
import rasm1 from "../images/errorimg.png"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { NavLink } from 'react-router-dom'
function Error() {
  return (
    <div className='error'>
      <Header/>
      <h1>404</h1>
      <p>Oops, the page you are looking for doesn’t exist.</p>
      <NavLink to="/">
      <button>Back Home</button>
      </NavLink>
<div className="error_img">
  <img src={rasm1} alt="" />
</div>
<Footer/>
    </div>
  )
}

export default Error
