//HERO SECTION RELATED
import React from "react";

//HERO
export default function Hero() {
  //----vars:

  return (
    <div className="Hero-Section">
      <div className="WRAPPER">
        <div className="img">
          <div className="content">
            <h1 className="Header-Text">
              Painting & remodeling <br></br> with craftmanship <br></br> you
              can trust
            </h1>
            <p className="desc">
              We specialize in partnering with homeowners who appreciate
              exceptional craftsmanship and understand the value of a
              well-executed finish. If you're ready to invest in lasting beauty
              and quality, we'd love to bring your vision to life.
            </p>
            <div className="button-section">
              <a href="#AboutUs">
                <button className="learnMore">Learn More</button>
              </a>
              <a href="#ContactUs">
                <button className="contactUs">Contact Us</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
