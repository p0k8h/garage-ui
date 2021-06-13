import React from "react";

import Img1 from "../../images/1.jpg"
import Img2 from "../../images/2.jpg"
import Img3 from "../../images/3.jpg"
import Img4 from "../../images/4.jpg"
import Img5 from "../../images/5.jpg"
import Footer from "./Footer";


const Car = () => {
  return (
    <>
      <section id="car" className="car">
      </section>
      <section id="home-intro" className="content" style={{ height: 'auto' }}>
        <h1>
          Car Mechanisms Present Out There
    </h1>
        <div className="about-cont">
          <div className="about-cont-cont">
            <p>
              <br />
          While most motorists still drive cars with a regular petrol or diesel internal-combustion engine (ICE), few will have failed to notice the rising popularity of electric and hybrid cars. That trend is only set to grow. Volkswagen, for example, plans to offer an electrified version of every one of its models by 2030, with Ford, Jaguar and Toyota making similar pledges. The UK government, meanwhile, has committed to ending the sale of new petrol and diesel cars by 2040 and is considering whether to bring that date forward.<br /><br />
            </p>
            <p>
              <strong>Types of Powertrains</strong>
            </p>
            <ul>
              <li>
                <strong>Mild Hybrid</strong><br /><img src={Img1} style={{ width: 'auto' }} />Drivers looking for some of the benefits of an AFV without any of the perceived complication and expense may be tempted by a mild hybrid. Offered by manufacturers as diverse as Suzuki and Mercedes, a mild hybrid comprises a beefed-up starter motor, known as a belt alternator starter (BAS). The BAS recoups energy that would otherwise be lost during braking, feeding it into the battery. This, in turn, helps power the wheels in conjunction with the engine �although the battery rarely drives the wheels on its own.<br /><br />
              </li>
              <li>
                <strong>Full Hybrid</strong><br /><img src={Img2} style={{ width: 'auto' }} />The best-established class of AFV, full hybrids comprise an electric motor, a battery pack and (typically) a petrol engine. On hybrids like these, the wheels can be powered by the engine and motor working together, or solely by the engine, or solely by the motor.Electric range is usually only one or two miles, and ensuring the car stays in EV mode can require a deft right foot. The motor�s batteries are charged up by a combination of the petrol engine and regenerative braking leading Toyota to refer to its hybrid models as 'Self-Charging Hybrids'.<br /><br />
              </li>
              <li>
                <strong>Plug-in hybrid</strong><br /><img src={Img3} style={{ width: 'auto' }} />A plug-in hybrid has the same philosophy as a full hybrid, but adds a much bigger battery that can be charged via a plug. As with conventional hybrids, the batteries and engine can drive the wheels together or independently, but a PHEV�s electric-only range is typically 30 miles or so. <br /><br />
              </li>
              <li>
                <strong>Electric Vehicle (EV)</strong><br /><img src={Img4} style={{ width: 'auto' }} />An EV gets all its power from an on-board battery, which must be charged. How far it can travel on a charge depends on how much it weighs, its battery size (you can often pay for a larger one when specifying your car), how you drive it, the speeds you do, roads on which you travel and the weather; cold temperatures adversely affect an EV�s range.<br /><br />
              </li>
              <li>
                <strong>Internal-combustion engine (ICE)</strong><br /><img src={Img5} style={{ width: 'auto' }} />Despite huge leaps forward in electrification technology cars sales in the UK remain dominated by purely petrol and diesel cars.
            While local emission zones and national tax policies (diesel company cars sit one band higher than petrol ones) have been contributing to diesel models� negative press, the fuel economy and CO2 emissions advantage they offer remains as valid as ever. That means they�re something of a default choice, and a sound buy, for drivers who cover above-average distances. Euro 6 diesels are also light-years ahead in terms of their cleanliness compared with older vehicles. Diesels typically have more torque than their petrol counterparts, too, making them better at towing, and ideal motorway companions. Large cars, such as full-size SUVs, often suit diesel power better.<br /><br />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>

  );
};

export default Car;
