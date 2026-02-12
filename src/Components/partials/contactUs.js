//CONTACT US SECTION RELATED
import React from "react";

//-------[ HOW TO USE CONTACT FORM:
// https://formsubmit.co/

// BEOFRE USING THE FORM MAKE SURE YOU INSERT YOUR EMAIL AND ACTIVATE:
// https://prnt.sc/cniNA2-S2BFS

//CONTACT US
export default function ContactUs() {
  //----vars:

  //--------
  return (
    <div className="ContactUs-Section" id="ContactUs">
      <div className="WRAPPER">
        <div className="img"></div>
        <div className="content">
          <div className="Header">
            <h1 className="header-title">Contact Us</h1>
            <p className="header-sub">Let's Talk About Your Project</p>
          </div>

          <form
            className="contact-form"
            method="POST"
            action="https://formsubmit.co/your@email.com"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://yourdomain.com/thank-you"
            />

            <div className="form-row">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
              />
            </div>

            <input type="text" name="phone" placeholder="Phone" />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="company" placeholder="Company" />

            <textarea
              name="message"
              placeholder="Tell us about your issue"
              required
            ></textarea>

            <button type="submit" className="btn">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
