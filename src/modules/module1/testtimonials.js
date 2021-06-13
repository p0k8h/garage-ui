import React from "react";

import Test1 from "../../images/test1.jpg"
import Test2 from "../../images/test2.jpg"
import Test3 from "../../images/test3.jpg"
import Footer from "./Footer";

const Testimonials = () => {
  return (
    <>
  <section id="test" className="test">
  </section>
  <section className="content" style={{height: 'auto'}}>
    <h1>
      TESTIMONIALS
    </h1>
    <div className="about-cont" style={{backgroundColor: '#1c1b18'}}>
      <div className="about-cont-cont">
        <div className="item bord-brand" style={{height: 'auto'}}>
          <div className="ser" style={{justifyContent: 'space-around'}}>
            <img src={Test1} style={{width: 'auto', minHeight: 169}} />
            <p style={{width: '70%'}}>
              <strong>
                Properly Equiped Garage
              </strong><br />
              <q>
                My car was pulling towards one side while driving. I got my car diagnosed at the Famous Garage. They immediately diagnosed the problem and put my car for wheel alignment. Well, they did a great job there, I was back on the road in less than 30mins. They have really good equipment for servicing.
              </q><br />                                    -Michael Thomas
            </p>
          </div>
        </div>
        <div className="item bord-brand" style={{height: 'auto'}}>
          <div className="ser" style={{justifyContent: 'space-around'}}>
            <p style={{width: '70%'}}>
              <strong>
                Cost-Effective Solution
              </strong><br />
              <q>
                I went to the Famous Garage, for the replacement of front shockers of my car. The entire coordination was done in a very professional manner and the services they rendered deserve appreciation. The most ethical part was fair invoice value due to the fair cost of purchased material which was well-taken care of.
              </q><br />                                     -Zayn Lawrence
            </p>
            <img src={Test2} style={{width: 'auto', minHeight: 169}} />
          </div>
        </div>
        <div className="item bord-brand" style={{height: 'auto'}}>
          <div className="ser" style={{justifyContent: 'space-around'}}>
            <img src={Test3} style={{maxWidth: '100%', height: 'auto'}} />
            <p style={{width: '70%'}}>
              <strong>
                Great Service
              </strong><br />
              <q>
                They were really helpful and completed full servicing of my car in less than 90 minutes. The service station mechanic was explaining each and every thing. It helped me a lot and saved a lot of time instead of going to authorised service centre.
              </q><br />                                    -Jessica Cruz
            </p>
          </div>
        </div>
      </div></div></section>
      <Footer />
      </>

  )
}

export default Testimonials;
