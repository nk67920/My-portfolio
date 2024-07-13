import React, {useContext} from 'react'
import './services.css'
import Heartemoji from '../../img/heartemoji.png'
import Card from '../card/Card'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
//import { themeContext } from "../../Context";/
//  import { motion } from "framer-motion";
// import Resume from '../../img/resume.pdf';


const Services = () => {
  return (
    <div className="services">

      {/* left side */}
      <div className="awesome">
        <span> My Awesome</span>
        <span>Services</span>
        <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium  
        <br />quia iusto temporibus suscipit, quam ducimus inventore 
       </span>
       {/* <a href={Resume} download > */}
       <button className= 'button s-button'>Download CV</button>
       {/* </a> */}
       <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>


      </div>

      {/* right side */}
      <div className="cards">

      <div style={{left: '14rem'}}>
        <Card
          emoji = {Heartemoji}
          heading ={"Design"}
          details ={"Figma, Sketch, Photoshop, Adobe xd"}
        />
      </div>
      {/* second card */}
<div style={{top:"12rem", left: "-4rem"}} >
<Card
  emoji={Glasses}
  heading={"Developer"}
  details={"Html, Css, JavaScript, React"}
/>
</div>
{/* third card */}

<div style={{top: "19rem", left:"12rem"}}>
<Card
  emoji={Humble}
  heading={"UI/UX"}
  details={"Lorem ipsum dummy text are usually used in section where we need some random text "}
   
/>
</div>

        <div className="blur s-blur2"style={{ background: "var(--purple)" }}>

        </div>
</div>
      </div>
    
  )
}

export default Services;