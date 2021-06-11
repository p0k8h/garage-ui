import React from "react";

import Imgs1 from "../../images/s1.PNG"
import Imgs5 from "../../images/s5.PNG"
import Imgs2 from "../../images/s2.PNG"
import Imgs3 from "../../images/s3.PNG"
import Imgs4 from "../../images/s4.PNG"


const Service = () => {
  return (
    <>
  <section id="service" className="service">
  </section>
  <section id="service" className="content" style={{height: 'auto'}}>
    <h1>
      Services Offered By Us
    </h1>
    <div className="about-cont" style={{backgroundColor: '#1c1b18'}}>
      <div className="about-cont-cont">
        <div className="row">
          <div className="column">
            <div className="item">
              <div className="ser">
                <img src={Imgs1} /><p><strong>Car Maintenence</strong><br />Affordable car maintenence by experienced mechanics using genuine OEM parts &amp; manufacturer recommended guidelines</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="item">
              <div className="ser">
                <img src={Imgs5} /><p><strong>Log Book Service</strong><br />We maintaing a log book for everything in a systematic, organised way.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="item">
              <div className="ser">
                <img src={Imgs2} /><p><strong>Brake and Suspension Repair</strong><br />Brakes or Suspension. we provides repair services for all issues of your car.</p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="item">
              <div className="ser">
                <img src={Imgs3} /><p><strong>Gearbox and Clutch Repair</strong><br />Gearbox or Clutch. we provides repair services for all issues of your car.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="ser" style={{justifyContent: 'center'}}>
            <img src={Imgs4} /><p><strong>EFI Diagostic and Repair</strong><br />In today's complex, computer controlled vehicles,<br /> EFI Diagnosis is essential.The expense of maintaining<br /> your vehicle means that guessing is not good enough!!<br /> You need your car repaired properly the first time.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default Service;
