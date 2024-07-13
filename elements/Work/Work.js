import React from 'react'
import './Work.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Facebook from '../../img/Facebook.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'

const Work = () => {
  return (
    <div className="work">
    {/* left side */}
        <div className="awesome">
        <span> Works for All these</span>
        <span>Brands & Clients</span>
        <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit Accusantium  
        <br />
        quia iusto temporibus suscipit, quam ducimus inventore 
        <br />
        ipsum is simply dummy text of printing
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing
       </span>
       
       <button className= 'button s-button'>Hire me</button>
      
       <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>

      </div>

      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
            <div className="w-secCircle">
                <img src= {Upwork} alt="" />
            </div>

            <div className="w-secCircle">
                <img src= {Fiverr} alt="" />
            </div>

            <div className="w-secCircle">
                <img src= {Amazon} alt="" />
            </div>

            <div className="w-secCircle">
                <img src= {Shopify} alt="" />
            </div>

            <div className="w-secCircle">
                <img src= {Facebook} alt="" />
            </div>
        </div>
        {/* background circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>

      </div>

    </div>
  )
}

export default Work