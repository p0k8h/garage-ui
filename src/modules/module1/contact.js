import React from "react";

const Contact = () => {
  return (
    <>
  <section id="contact" className="contact">
  </section>
  <section id="contact" className="content" style={{height: 'auto'}}>
    <h1>
      Drop Your Details We Will Contact You ASAP.
    </h1>
    <div className="about-cont" style={{backgroundColor: '#1c1b18', width: '70%'}}>
      <div className="about-cont-cont">
        <form id="contact-form">
          <div className="form-group">
            <label id="name-label" htmlFor="name">
              Name
            </label>
            <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label id="email-label" htmlFor="email">
              Email
            </label>
            <input type="email" name="email" id="email" className="form-control" placeholder="Enter your Email" required />
          </div>
          <div className="form-group">
            <label id="number-label" htmlFor="number">
              Phone
            </label>
            <input type="number" name="number" id="number" className="form-control" placeholder="Enter your contact number here" />
          </div>
          <div className="form-group">
            <label>Describe your need in brief</label>
            <textarea id="comments" className="input-textarea" name="comment" placeholder="Enter your message here..." defaultValue={""} />
          </div>
          <div className="form-group">
            <button type="submit" id="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form></div></div>
  </section>
</>
  )
}

export default Contact;
