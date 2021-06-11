import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (<>
    <section id="about" className="about">
    </section>
    <section id="home-intro" className="content" style={{height: 'auto'}}>
      <h1>
        Why Choose Famous Garage?
      </h1>
      <div className="about-cont">
        <div className="about-cont-cont">
          <p>
            <strong>
              Car services offered
            </strong><br />
            At Famous Garage, we offer a wide variety of best car services like Car Maintenance, Log Book Service, Brake and Suspension Repair, Gearbox and Clutch Repair, EFI Diagnostic and Repair, Periodic Services, Denting &amp; Painting, Batteries Replacement, AC Service &amp; Repair, Tyre Replacement &amp; Wheelcare, Car Detailing, Custom Services, Windshields &amp; Glass Replacement, Lights &amp; Fitments, Car Accessories and much more.<br /><br />
          </p>
          <p>
            <strong>Advantages</strong>
          </p>
          <ul>
            <li>
              <strong>Multi-Channel Customer Support</strong><br />Our focus is to serve our customers with satisfaction. In this way, we work for availability on different channels to ensure that we are there to help you each time you need us.<br /><br />
            </li>
            <li>
              <strong>We utilize 100% genuine OEM/OES Spare Parts&nbsp;</strong><br />We have a reliable central spare parts inventory, because of which we can source genuine OEM/OES spare parts whenever your vehicle requires servicing. We use the parts produced or proposed by your car�s manufacturer.<br /><br />
            </li>
            <li>
              <strong>Well-equipped workshop and Dedicated Service</strong><br />Our workshopis outfitted with the high-class equipment and mechanical get-together. The best sorts of mechanical assembly in the business are used at our workshop. Our mechanics and Service are experienced and certified in diagnosing Hyundai, Audi, BMW, Mazda and all the brands.<br /><br />
            </li>
            <li>
              <strong>Appealing Pricing&nbsp;</strong><br />We get a good deal on costs by our mass buying intensity of spare parts and consumables on account of our dynamic technique and hold in the market. Guess what! We offer the advantage directly to you! At Famous Garage we provide up to 40% savings.<br /><br />
            </li>
            <li>
              <strong>Committed Service Buddy Consigned</strong><br />Alongside our ever-prepared client care, in equal, we offer you a knowledgeable mindful assistance mate. For your vehicle administrations.<br /><br />
            </li>
            <li>
              <strong>Free Pickup &amp; Drop</strong><br />Won�t be able to drop your car at our workshop? Nothing to worry, we have got you covered! &nbsp;Avail our FREE doorstep pick-up and delivery, available on all car services. You just have to sit and relax, while we get your car serviced and delivered.<br /><br />
            </li>
          </ul>
          <h3 className="about-ser">
            <strong>Wish to see our services ?</strong><br /><br />
            <Link to="/services">SERVICES</Link>
          </h3>
        </div>
      </div>
    </section>
  </>
  )
}

export default About;
