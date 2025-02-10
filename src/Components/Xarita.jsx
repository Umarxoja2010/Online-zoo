import React, { useRef, useState } from 'react'
import "../Styles/xarita.css"
import rasm1 from "../images/xarita.png"
import rasm2 from "../images/plus.png"
import rasm3 from "../images/mnus.png"
function Xarita() {
    const[zoom,setzoom] = useState(1)
    let karta =useRef ()
    function zoomOut () {
  karta.current.style. transform= `scale(${zoom})`
setzoom((prev) => prev+0.2)
    }
    function zoomIn () {
  karta.current.style. transform= `scale(${zoom})`
setzoom((prev) => prev-0.2)

    }
  return (
<section className='xarita'>
    <div className="container">
        <div className='boshliq_xarita'>
        <img ref={karta} className='boshkarta' src={rasm1} alt="" />
        </div>
    
<div className='xarita_k'>
    <button onClick={zoomOut}>
    <img  src={rasm2} alt="" />
    </button>
        <button onClick={zoomIn}>
        <img  src={rasm3} alt="" />
        </button>
</div>
    </div>
</section>
  )
}

export default Xarita
