import React from "react";

import AudiImg from "../../images/audi.jpg"
import BMWImg from "../../images/bmw.jpg"
import MazdaImg from "../../images/mazda.jpg"
import HyundaiImg from "../../images/hyundai.jpg"
import BImg from "../../images/b.png"

const Brands = () => {

  return (
    <>
      <section id="brands" className="brands">
      </section>
      <section id="brand" className="content" style={{ height: 'auto' }}>
        <h1>
          Brands We Offer Service For
    </h1>
        <div className="about-cont" style={{ backgroundColor: '#1c1b18' }}>
          <div className="about-cont-cont">
            <div className="item bord-brand">
              <div className="ser" style={{ justifyContent: 'space-around' }}>
                <img src={AudiImg} style={{ width: '20%' }} />
                <h1>
                  AUDI
            </h1>
              </div>
            </div>
            <div className="item bord-brand">
              <div className="ser" style={{ justifyContent: 'space-around' }}>
                <h1>
                  BMW
            </h1>
                <img src={BMWImg} style={{ width: '20%' }} />
              </div>
            </div>
            <div className="item bord-brand">
              <div className="ser" style={{ justifyContent: 'space-around' }}>
                <img src={MazdaImg} style={{ width: '20%' }} />
                <h1>
                  MAZDA
            </h1>
              </div>
            </div>
            <div className="item bord-brand">
              <div className="ser" style={{ justifyContent: 'space-around' }}>
                <h1>
                  HYUNDAI
            </h1>
                <img src={HyundaiImg} style={{ width: '20%' }} />
              </div>
            </div>
            <div className="item bord-brand">
              <div className="ser" style={{ justifyContent: 'space-around' }}>
                <img src={BImg} style={{ width: '20%' }} />
                <h1>
                  AND MANY OTHERS...
            </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default Brands;
