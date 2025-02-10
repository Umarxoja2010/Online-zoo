import React from 'react'
import "../Styles/qiyshiq.css"
import rasm1 from "../images/danayt.png"
import rasm2 from "../images/qoolo.png"
import rasm3 from "../images/maymunkalla.png"

function Qiyshiq() {
  return (
<section className='qiyshiq'>
    <div className="container">
        <div className="qiyshiq_top">
        <h4>Pay and feed</h4>
        <button> <span>Donate to volunteers</span></button>
        </div>
        <div className="qishiq_wrapper">
            <div className="qiyshiq_card">
                <div>
                <img src={rasm1} alt="" />

                </div>
                <p>You donate to your favourite animals </p>
            </div>
            <div className="chizu"></div>
            <div className="qiyshiq_card2">
                <div>

                <img src={rasm2} alt="" />
                </div>
                <p>Zoo Keepers feed animals with their favourite food</p>
            </div>
            <div className="chizu"></div>
            <div className="qiyshiq_card">
                <div>

                <img src={rasm3} alt="" />
                </div>
                <p>Animals are healthy and happy</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Qiyshiq
